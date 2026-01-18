"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

interface CommercialFormProps {
  formspreeId?: string;
}

export function CommercialForm({ formspreeId = "placeholder" }: CommercialFormProps) {
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
        <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Inquiry Received!</h3>
        <p className="text-muted">Thank you for your interest in our commercial services. A member of our team will contact you within 1-2 business days to discuss your needs.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="businessName">Business Name *</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="industry">Industry *</label>
          <select id="industry" name="industry" required>
            <option value="">Select your industry</option>
            <option value="restaurant">Restaurant / Food Service</option>
            <option value="hotel">Hotel / Hospitality</option>
            <option value="medical">Medical / Healthcare</option>
            <option value="spa">Spa / Salon</option>
            <option value="office">Corporate / Office</option>
            <option value="retail">Retail</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contactName">Contact Name *</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            required
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="title">Title / Position</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Your role"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(912) 555-1234"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="volume">Estimated Weekly Volume *</label>
          <select id="volume" name="volume" required>
            <option value="">Select estimated volume</option>
            <option value="small">Small (under 50 items)</option>
            <option value="medium">Medium (50-200 items)</option>
            <option value="large">Large (200-500 items)</option>
            <option value="enterprise">Enterprise (500+ items)</option>
          </select>
        </div>
        <div>
          <label htmlFor="frequency">Service Frequency</label>
          <select id="frequency" name="frequency">
            <option value="">Select frequency</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="asneeded">As needed</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="invoicingNeeds"
            value="yes"
            className="w-4 h-4 text-heritage-blue"
          />
          <span>We require invoicing / net terms</span>
        </label>
      </div>
      
      <div>
        <label htmlFor="services">Services Needed</label>
        <textarea
          id="services"
          name="services"
          rows={3}
          placeholder="What types of items do you need cleaned? (e.g., tablecloths, uniforms, linens...)"
        />
      </div>
      
      <div>
        <label htmlFor="message">Additional Information</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Any other details about your commercial cleaning needs..."
        />
      </div>
      
      {status === "error" && (
        <div className="bg-best-red/10 border border-best-red text-best-red p-4 text-sm">
          There was an error submitting your inquiry. Please try again or call us directly at (912) 354-1234.
        </div>
      )}
      
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}
