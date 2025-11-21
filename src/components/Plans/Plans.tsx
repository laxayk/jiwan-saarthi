import React, { useState } from "react";
import PlanModal from "./PlanModal";
import styles from "./Plans.module.css";

type Plan = {
  id: "plan1" | "plan2";
  title: string;
  price: string;
  short: React.ReactNode;
  full: React.ReactNode;
};

const PLANS: Plan[] = [
  {
    id: "plan1",
    title: "Daily Companion Care",
    price: "₹499 / month",
    short: (
      <ul>
        <li>Daily WhatsApp texts: guidance, reminders, motivation, next steps</li>
        <li>Report review and simple explanations</li>
        <li>Help preparing questions for hospital visits</li>
        <li>Guidance on nutrition, lifestyle, and recovery basics</li>
        <li>First structured video call within 72 hours</li>
      </ul>
    ),
    full: (
      <div>
        <p><strong>🩵 DAILY COMPANION CARE</strong></p>
        <p><strong>₹499 / month</strong></p>
        <p>
          For patients (or caregivers) who need daily emotional + informational support.
        </p>
        <p><strong>What they get:</strong></p>
        <ul>
          <li>📩 Daily WhatsApp texts</li>
          <li>📝 Report review in simple language</li>
          <li>🩺 Understand doctor advice</li>
          <li>🧾 Prepare questions before visits</li>
          <li>🥗 Nutrition, lifestyle & recovery basics</li>
          <li>📆 Treatment timeline guidance</li>
          <li>📍 Hospital department guidance</li>
          <li>📞 First structured video call in 72 hours</li>
        </ul>
        <p style={{ marginTop: 8 }}><strong>Identity:</strong></p>
        <ul>
          <li>The patient never feels alone</li>
          <li>You act as the calm, structured presence</li>
          <li>You make hospital visits easier and less confusing</li>
        </ul>
      </div>
    )
  },
  {
    id: "plan2",
    title: "Advanced Companion Care",
    price: "₹999 / month",
    short: (
      <ul>
        <li>Everything in Daily, plus:</li>
        <li>1 WhatsApp Video Call</li>
        <li>2 WhatsApp Audio Calls</li>
        <li>Priority reply lane</li>
        <li>Monthly progress review</li>
      </ul>
    ),
    full: (
      <div>
        <p><strong>💙 ADVANCED COMPANION CARE</strong></p>
        <p><strong>₹999 / month</strong></p>
        <p>For patients who want more direct interaction & reassurance.</p>

        <p><strong>Everything in BASIC, plus:</strong></p>
        <ul>
          <li>🎥 1 Video Call / month</li>
          <li>📞 2 Audio Calls / month</li>
          <li>⚡ Priority reply lane</li>
          <li>📊 Monthly progress review</li>
          <li>🥗 Nutrition & symptom guidance</li>
          <li>🤝 Support during difficult phases</li>
        </ul>
        <p style={{ marginTop: 8 }}><strong>Identity:</strong></p>
        <ul>
          <li>You feel like a professional is walking beside them</li>
          <li>You get reassurance quickly</li>
          <li>You reduce fear, confusion, and isolation</li>
        </ul>
      </div>
    )
  }
];

const PlanCard: React.FC<{
  plan: Plan;
  onSelect: (id: Plan["id"]) => void;
}> = ({ plan, onSelect }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={() => onSelect(plan.id)}
    onKeyDown={(e) => e.key === "Enter" && onSelect(plan.id)}
    className={styles.planCard}
  >
    <h3>{plan.title}</h3>
    <div className={styles.planPrice}>{plan.price}</div>
    <div className={styles.planShort}>{plan.short}</div>
  </div>
);

const Plans: React.FC = () => {
  const [modalPlan, setModalPlan] = useState<Plan | null>(null);

  return (
    <section id="plans" className="section container">
      <h2 style={{ textAlign: "center" }}>Our Plans</h2>
      <div className={styles.cardsRow}>
        {PLANS.map((p) => (
          <PlanCard key={p.id} plan={p} onSelect={() => setModalPlan(p)} />
        ))}
      </div>

      {modalPlan && (
        <PlanModal plan={modalPlan} onClose={() => setModalPlan(null)} />
      )}
    </section>
  );
};

export default Plans;
