"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

interface ServiceInterestFormProps {
  formspreeId?: string;
}

const services = [
  "Dry Cleaning",
  "Laundry & Press",
  "Wash & Fold",
  "Uniform Cleaning",
  "Wedding Dress Care",
  "Household Items",
  "Other",
];

export function ServiceInterestForm({ formspreeId = "placeholder" }: ServiceInterestFormProps) {
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
        <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Request Received!</h3>
        <p className="text-muted">Thank you for your interest. We&apos;ll be in touch shortly to discuss your service needs.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-3">Which services are you interested in? *</label>
        <div className="grid grid-cols-2 gap-2">
          {services.map((service) => (
            <label key={service} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-warm-cream transition-colors">
              <input
                type="checkbox"
                name="services"
                value={service}
                className="w-4 h-4 text-heritage-blue"
              />
              <span className="text-sm">{service}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="pickupDelivery"
            value="yes"
            className="w-4 h-4 text-heritage-blue"
          />
          <span>I&apos;m interested in pickup & delivery service</span>
        </label>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredLocation">Preferred Location</label>
          <select id="preferredLocation" name="preferredLocation">
            <option value="">Select a location</option>
            <option value="waters">Waters Avenue</option>
            <option value="abercorn">Abercorn Street</option>
            <option value="either">Either location</option>
          </select>
        </div>
        <div>
          <label htmlFor="frequency">Expected Frequency</label>
          <select id="frequency" name="frequency">
            <option value="">How often do you need service?</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Every 2 weeks</option>
            <option value="monthly">Monthly</option>
            <option value="occasional">Occasionally</option>
            <option value="one-time">One-time service</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email *</label>
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
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(912) 555-1234"
          />
        </div>
        <div>
          <label htmlFor="zipCode">ZIP Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            placeholder="31404"
            maxLength={5}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message">Additional Information</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us more about your cleaning needs..."
        />
      </div>
      
      {status === "error" && (
        <div className="bg-best-red/10 border border-best-red text-best-red p-4 text-sm">
          There was an error submitting your request. Please try again or call us directly.
        </div>
      )}
      
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
}
