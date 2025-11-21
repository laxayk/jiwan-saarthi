import React, { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "../../utils/constants";
import styles from "./PlanModal.module.css";

type Props = {
  plan: {
    id: "plan1" | "plan2";
    title: string;
    price: string;
    full: React.ReactNode;
  };
  onClose: () => void;
};

const PlanModal: React.FC<Props> = ({ plan, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const phone = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");

  function openWhatsApp() {
    if (!name.trim()) return alert("Please enter your name");

    const msg = `Hi, I want to enroll in ${plan.title}. My name is ${name}. Email: ${email || "N/A"}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  return (
    <div className={styles.backdrop} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modalCard}>
        <button className={styles.closeBtn} onClick={onClose}>✖</button>

        <div className={styles.modalGrid}>
          <div className={styles.fullDetails}>{plan.full}</div>

          <aside className={styles.formBox}>
            <h4>Get this plan</h4>

            <label>Your name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />

            <label>Email (optional)</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"/>

            <button onClick={openWhatsApp} className="btn btn-primary">Message on WhatsApp</button>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PlanModal;
