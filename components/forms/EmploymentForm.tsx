"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

interface EmploymentFormProps {
  formspreeId?: string;
}

export function EmploymentForm({ formspreeId = "placeholder" }: EmploymentFormProps) {
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
        <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Application Submitted!</h3>
        <p className="text-muted">Thank you for your interest in joining our team. We&apos;ll review your application and contact you soon.</p>
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
            placeholder="Your full name"
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
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(912) 555-1234"
          />
        </div>
        <div>
          <label htmlFor="location">Preferred Location *</label>
          <select id="location" name="location" required>
            <option value="">Select a location</option>
            <option value="waters">Waters Avenue</option>
            <option value="abercorn">Abercorn Street</option>
            <option value="either">Either location</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="position">Position Interest *</label>
        <select id="position" name="position" required>
          <option value="">What position interests you?</option>
          <option value="counter">Counter Service</option>
          <option value="presser">Presser / Finisher</option>
          <option value="cleaner">Dry Cleaning Technician</option>
          <option value="driver">Delivery Driver</option>
          <option value="manager">Management</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="availability">Availability *</label>
          <select id="availability" name="availability" required>
            <option value="">Select your availability</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="weekends">Weekends only</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
        <div>
          <label htmlFor="startDate">Available Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="experience">Relevant Experience</label>
        <textarea
          id="experience"
          name="experience"
          rows={4}
          placeholder="Tell us about any relevant work experience you have..."
        />
      </div>
      
      <div>
        <label htmlFor="message">Why do you want to work at Best Cleaners?</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="We'd love to hear why you're interested in joining our team..."
        />
      </div>
      
      {status === "error" && (
        <div className="bg-best-red/10 border border-best-red text-best-red p-4 text-sm">
          There was an error submitting your application. Please try again or call us directly.
        </div>
      )}
      
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
