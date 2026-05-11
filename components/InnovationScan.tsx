"use client";

import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import {
  getScanLevel,
  getScanRecommendations,
  scanQuestions,
  type ScanCategory,
} from "@/lib/scan";

type Answers = Record<ScanCategory, number>;

const initialAnswers = scanQuestions.reduce((result, question) => {
  result[question.id] = 3;
  return result;
}, {} as Answers);

export function InnovationScan() {
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [showResult, setShowResult] = useState(false);

  const score = useMemo(() => {
    const total = Object.values(answers).reduce((sum, value) => sum + value, 0);
    return Number((total / scanQuestions.length).toFixed(1));
  }, [answers]);

  const level = getScanLevel(score);
  const recommendations = getScanRecommendations(score);

  return (
    <section className="container-page py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
        <div className="rounded-[2rem] border border-ink/10 bg-white/82 p-5 shadow-soft md:p-8">
          <div className="grid gap-7">
            {scanQuestions.map((question) => (
              <fieldset key={question.id} className="rounded-3xl bg-cream p-5">
                <legend className="text-sm font-black uppercase tracking-[0.14em] text-coral">
                  {question.label}
                </legend>
                <p className="mt-3 text-lg font-bold leading-7 text-ink">{question.prompt}</p>
                <div className="mt-5 grid grid-cols-5 gap-2" role="radiogroup" aria-label={question.label}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      role="radio"
                      onClick={() => setAnswers((current) => ({ ...current, [question.id]: value }))}
                      className={`focus-ring rounded-2xl px-3 py-3 text-sm font-black transition ${
                        answers[question.id] === value
                          ? "bg-ink text-cream"
                          : "bg-white text-ink hover:bg-mist"
                      }`}
                      aria-checked={answers[question.id] === value}
                      aria-label={`${question.label}: score ${value} van 5`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setShowResult(true)}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-pine px-6 py-4 font-bold text-cream shadow-soft"
            >
              Ontdek je veranderkracht <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => {
                setAnswers(initialAnswers);
                setShowResult(false);
              }}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink/12 bg-white px-6 py-4 font-bold text-ink"
            >
              Reset <RotateCcw size={18} />
            </button>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[2rem] bg-ink p-7 text-cream shadow-soft">
            <div className="flex items-center gap-3">
              <Sparkles className="text-lime" />
              <p className="text-sm font-black uppercase tracking-[0.18em] text-lime">Resultaat</p>
            </div>
            {showResult ? (
              <>
                <p className="mt-8 text-6xl font-black">{score}</p>
                <h2 className="mt-3 text-3xl font-black">{level}</h2>
                <p className="mt-4 leading-7 text-cream/72">
                  Deze score is een eerste indicatie voor draagvlak, werkdruk en implementatiekracht. In het platform kan dit later worden verrijkt met teamcontext,
                  aanvullende signalen en praktisch advies op maat.
                </p>
                <div className="mt-8 grid gap-3">
                  {recommendations.map((recommendation) => (
                    <div key={recommendation} className="rounded-3xl bg-white/10 p-4">
                      <p className="font-semibold leading-7">{recommendation}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="mt-8 leading-8 text-cream/72">
                Vul de vragen in en ontvang direct een score met begrijpelijke aanbevelingen voor de volgende kleine stap.
              </p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
