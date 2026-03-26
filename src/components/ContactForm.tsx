"use client";

import { useState } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MaskHappyIcon,
  UsersThreeIcon,
  CalendarBlankIcon,
  ChatTextIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormFields {
  name: string;
  email: string;
  phone: string;
  tourInterest: string;
  groupSize: string;
  preferredDate: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const tourOptions = [
  { value: "", label: "Select a tour..." },
  { value: "ghost-tour", label: "Ghost & Haunted History Tour — $35/adult" },
  { value: "historic-walking-tour", label: "Historic Walking Tour — $30/adult" },
  { value: "food-tour", label: "Food & Spirits Tour — $85/adult" },
  { value: "celebrity-tour", label: "Celebrity Homes & Filming Locations — $55/adult" },
  { value: "private-tour", label: "Private Custom Tour — From $150/group" },
  { value: "not-sure", label: "Not sure yet — help me decide" },
];

const inputBase: React.CSSProperties = {
  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
  backgroundColor: "#FAFAF7",
  border: "1px solid #e0d9cc",
  color: "#2D2D2D",
  borderRadius: "0.625rem",
  fontSize: "0.9375rem",
  lineHeight: "1.6",
  width: "100%",
  display: "block",
  outline: "none",
  transition: "border-color 0.25s cubic-bezier(0.32, 0.72, 0, 1), box-shadow 0.25s cubic-bezier(0.32, 0.72, 0, 1)",
};

const inputPadding = "px-4 py-3.5";
const labelBase: React.CSSProperties = {
  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 600,
  letterSpacing: "0.02em",
  color: "#1B2A4A",
  display: "block",
  marginBottom: "0.375rem",
};
const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
  fontSize: "0.8125rem",
  color: "#c0392b",
  marginTop: "0.375rem",
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
};

function FieldIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <span
      className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
      aria-hidden="true"
    >
      <Icon weight="light" size={17} style={{ color: "#C8963E" }} />
    </span>
  );
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    tourInterest: "",
    groupSize: "",
    preferredDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!fields.name.trim()) e.name = "Please enter your name.";
    if (!fields.email.trim()) {
      e.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = "That doesn't look like a valid email address.";
    }
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleFocus(name: string) {
    setFocusedField(name);
  }

  function handleBlur() {
    setFocusedField(null);
  }

  function getFocusStyle(name: string): React.CSSProperties {
    return focusedField === name
      ? {
          borderColor: "#C8963E",
          boxShadow: "0 0 0 3px rgba(200, 150, 62, 0.15)",
        }
      : {};
  }

  function getErrorBorderStyle(name: keyof FormErrors): React.CSSProperties {
    return errors[name]
      ? { borderColor: "#c0392b", boxShadow: "0 0 0 3px rgba(192, 57, 43, 0.1)" }
      : {};
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setFormState("submitting");
    // The form doesn't submit anywhere — simulate a brief delay for UX
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormState("success");
  }

  if (formState === "success") {
    return (
      <div
        className="flex flex-col items-start py-16 px-8"
        style={{
          backgroundColor: "#F5F0E8",
          borderRadius: "1rem",
          border: "1px solid rgba(200, 150, 62, 0.2)",
        }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: "rgba(200, 150, 62, 0.12)" }}
        >
          <CheckCircleIcon weight="light" size={32} style={{ color: "#C8963E" }} />
        </div>
        <h3
          className="text-2xl font-bold mb-3"
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            color: "#1B2A4A",
            letterSpacing: "-0.01em",
          }}
        >
          Message received
        </h3>
        <p
          className="text-base leading-relaxed mb-8 max-w-[44ch]"
          style={{
            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
            color: "#6b6456",
          }}
        >
          Diana will be in touch within 24 hours to confirm your booking or
          answer any questions. Check your inbox — the reply will come from
          dberry017@icloud.com.
        </p>
        <button
          onClick={() => {
            setFormState("idle");
            setFields({
              name: "",
              email: "",
              phone: "",
              tourInterest: "",
              groupSize: "",
              preferredDate: "",
              message: "",
            });
          }}
          className="text-sm font-medium underline underline-offset-4 transition-colors duration-250"
          style={{
            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
            color: "#C8963E",
          }}
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Tour booking enquiry form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Name */}
        <div className="sm:col-span-1">
          <label htmlFor="name" style={labelBase}>
            Your Name <span style={{ color: "#C8963E" }}>*</span>
          </label>
          <div className="relative">
            <FieldIcon icon={UserIcon} />
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
              placeholder="First and last name"
              value={fields.name}
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
              className={inputPadding}
              style={{
                ...inputBase,
                paddingLeft: "2.5rem",
                ...getFocusStyle("name"),
                ...getErrorBorderStyle("name"),
              }}
            />
          </div>
          {errors.name && (
            <p id="name-error" role="alert" style={errorStyle}>
              <WarningCircleIcon weight="light" size={14} />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="sm:col-span-1">
          <label htmlFor="email" style={labelBase}>
            Email Address <span style={{ color: "#C8963E" }}>*</span>
          </label>
          <div className="relative">
            <FieldIcon icon={EnvelopeIcon} />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-required="true"
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
              placeholder="you@example.com"
              value={fields.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              className={inputPadding}
              style={{
                ...inputBase,
                paddingLeft: "2.5rem",
                ...getFocusStyle("email"),
                ...getErrorBorderStyle("email"),
              }}
            />
          </div>
          {errors.email && (
            <p id="email-error" role="alert" style={errorStyle}>
              <WarningCircleIcon weight="light" size={14} />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="sm:col-span-1">
          <label htmlFor="phone" style={labelBase}>
            Phone Number{" "}
            <span
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 400,
                color: "#6b6456",
              }}
            >
              (optional)
            </span>
          </label>
          <div className="relative">
            <FieldIcon icon={PhoneIcon} />
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(000) 000-0000"
              value={fields.phone}
              onChange={handleChange}
              onFocus={() => handleFocus("phone")}
              onBlur={handleBlur}
              className={inputPadding}
              style={{
                ...inputBase,
                paddingLeft: "2.5rem",
                ...getFocusStyle("phone"),
              }}
            />
          </div>
        </div>

        {/* Tour Interest */}
        <div className="sm:col-span-1">
          <label htmlFor="tourInterest" style={labelBase}>
            Tour Interest
          </label>
          <div className="relative">
            <FieldIcon icon={MaskHappyIcon} />
            <select
              id="tourInterest"
              name="tourInterest"
              value={fields.tourInterest}
              onChange={handleChange}
              onFocus={() => handleFocus("tourInterest")}
              onBlur={handleBlur}
              className={inputPadding}
              style={{
                ...inputBase,
                paddingLeft: "2.5rem",
                appearance: "none",
                cursor: "pointer",
                ...getFocusStyle("tourInterest"),
              }}
            >
              {tourOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {/* Custom select chevron */}
            <span
              className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            >
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="#C8963E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Group Size */}
        <div className="sm:col-span-1">
          <label htmlFor="groupSize" style={labelBase}>
            Group Size
          </label>
          <div className="relative">
            <FieldIcon icon={UsersThreeIcon} />
            <input
              id="groupSize"
              name="groupSize"
              type="number"
              min="1"
              max="50"
              placeholder="e.g. 4"
              value={fields.groupSize}
              onChange={handleChange}
              onFocus={() => handleFocus("groupSize")}
              onBlur={handleBlur}
              className={inputPadding}
              style={{
                ...inputBase,
                paddingLeft: "2.5rem",
                ...getFocusStyle("groupSize"),
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
              fontSize: "0.75rem",
              color: "#6b6456",
              marginTop: "0.375rem",
            }}
          >
            Groups of 8+ — please call or email directly.
          </p>
        </div>

        {/* Preferred Date */}
        <div className="sm:col-span-1">
          <label htmlFor="preferredDate" style={labelBase}>
            Preferred Date
          </label>
          <div className="relative">
            <FieldIcon icon={CalendarBlankIcon} />
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              value={fields.preferredDate}
              onChange={handleChange}
              onFocus={() => handleFocus("preferredDate")}
              onBlur={handleBlur}
              className={inputPadding}
              style={{
                ...inputBase,
                paddingLeft: "2.5rem",
                ...getFocusStyle("preferredDate"),
              }}
            />
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" style={labelBase}>
            Message or Questions
          </label>
          <div className="relative">
            <span
              className="absolute left-3.5 top-4 pointer-events-none"
              aria-hidden="true"
            >
              <ChatTextIcon weight="light" size={17} style={{ color: "#C8963E" }} />
            </span>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell Diana a bit about your visit, any questions you have, or any special requests..."
              value={fields.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              className={inputPadding}
              style={{
                ...inputBase,
                paddingLeft: "2.5rem",
                resize: "vertical",
                minHeight: "130px",
                ...getFocusStyle("message"),
              }}
            />
          </div>
        </div>
      </div>

      {/* Response time note */}
      <p
        className="mt-5 text-sm"
        style={{
          fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
          color: "#6b6456",
        }}
      >
        Diana handles all bookings personally. You&rsquo;ll hear back within
        24 hours — usually sooner.
      </p>

      {/* General error state */}
      {formState === "error" && (
        <div
          className="mt-5 p-4 rounded-lg flex items-start gap-3"
          role="alert"
          style={{
            backgroundColor: "rgba(192, 57, 43, 0.07)",
            border: "1px solid rgba(192, 57, 43, 0.2)",
          }}
        >
          <WarningCircleIcon
            weight="light"
            size={20}
            style={{ color: "#c0392b", flexShrink: 0, marginTop: "1px" }}
          />
          <p
            className="text-sm"
            style={{
              fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
              color: "#c0392b",
            }}
          >
            Something went wrong submitting the form. Please try again, or
            contact Diana directly at{" "}
            <a
              href="mailto:dberry017@icloud.com"
              style={{ textDecoration: "underline" }}
            >
              dberry017@icloud.com
            </a>
            .
          </p>
        </div>
      )}

      {/* Submit */}
      <div className="mt-7">
        <button
          type="submit"
          disabled={formState === "submitting"}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed"
          style={{
            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
            backgroundColor: "#1B2A4A",
            color: "#F5F0E8",
            letterSpacing: "0.03em",
            transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
            boxShadow: "0 2px 16px rgba(27, 42, 74, 0.2)",
          }}
        >
          {formState === "submitting" ? (
            <>
              <svg
                className="animate-spin"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="rgba(245,240,232,0.3)"
                  strokeWidth="2"
                />
                <path
                  d="M12 2a10 10 0 0 1 10 10"
                  stroke="#F5F0E8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send Enquiry
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(245, 240, 232, 0.12)" }}
              >
                <ArrowRightIcon weight="bold" size={12} />
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
