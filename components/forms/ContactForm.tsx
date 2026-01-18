"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

interface ContactFormProps {
  formspreeId?: string;
}

export function ContactForm({ formspreeId = "placeholder" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
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
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-heritage-blue/10 border border-heritage-blue p-8 text-center">
        <svg className="w-12 h-12 text-heritage-blue mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Message Sent!</h3>
        <p className="text-muted">Thank you for reaching out. We&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(912) 555-1234"
          />
        </div>
        <div>
          <label htmlFor="location">Preferred Location</label>
          <select id="location" name="location">
            <option value="">Select a location</option>
            <option value="waters">Waters Avenue</option>
            <option value="abercorn">Abercorn Street</option>
            <option value="either">Either location</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="subject">Subject *</label>
        <select id="subject" name="subject" required>
          <option value="">What can we help you with?</option>
          <option value="general">General Inquiry</option>
          <option value="services">Services Question</option>
          <option value="pricing">Pricing Information</option>
          <option value="pickup">Pickup & Delivery</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="How can we help you?"
        />
      </div>
      
      {status === "error" && (
        <div className="bg-best-red/10 border border-best-red text-best-red p-4 text-sm">
          There was an error sending your message. Please try again or call us directly.
        </div>
      )}
      
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
