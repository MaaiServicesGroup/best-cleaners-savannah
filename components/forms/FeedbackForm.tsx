"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

interface FeedbackFormProps {
  formspreeId?: string;
}

export function FeedbackForm({ formspreeId = "placeholder" }: FeedbackFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackType, setFeedbackType] = useState<"positive" | "improvement" | "">("");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success" && feedbackType === "positive") {
    return (
      <div className="bg-charcoal/5 border border-charcoal/30 p-8 text-center">
        <svg className="w-12 h-12 text-charcoal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Thank You!</h3>
        <p className="text-muted mb-6">We&apos;re so glad you had a great experience with us!</p>
        <p className="text-sm text-muted mb-4">
          Would you consider sharing your experience on Google or Yelp? It helps other 
          Savannah residents find quality dry cleaning.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="https://google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-sm"
          >
            Review on Google
          </a>
          <a
            href="https://yelp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-sm"
          >
            Review on Yelp
          </a>
        </div>
      </div>
    );
  }

  if (status === "success" && feedbackType === "improvement") {
    return (
      <div className="bg-charcoal/5 border border-charcoal/30 p-8 text-center">
        <svg className="w-12 h-12 text-charcoal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Feedback Received</h3>
        <p className="text-muted">
          Thank you for letting us know. We take all feedback seriously and will use it to 
          improve our service. If you&apos;d like to discuss this further, please call us at (912) 354-1234.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-3">How was your experience? *</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="feedbackType"
              value="positive"
              required
              onChange={() => setFeedbackType("positive")}
              className="w-4 h-4 text-charcoal"
            />
            <span>Positive</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="feedbackType"
              value="improvement"
              required
              onChange={() => setFeedbackType("improvement")}
              className="w-4 h-4 text-charcoal"
            />
            <span>Needs Improvement</span>
          </label>
        </div>
      </div>
      
      <div>
        <label htmlFor="message">Tell us more *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={feedbackType === "positive" 
            ? "What did you love about your experience?" 
            : "How can we improve? We genuinely want to know."
          }
        />
      </div>
      
      <div className="border-t border-border pt-6">
        <p className="text-sm text-muted mb-4">Optional: Let us know who you are so we can follow up</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>
      
      {status === "error" && (
        <div className="bg-best-red/10 border border-best-red text-best-red p-4 text-sm">
          There was an error submitting your feedback. Please try again or call us directly.
        </div>
      )}
      
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Feedback"}
      </Button>
    </form>
  );
}
