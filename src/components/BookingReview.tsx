'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { ArrowLeft, CalendarBlank, Clock, MapPin, Scissors } from '@phosphor-icons/react';
import { business } from '@/data/business';
import { formatPrice } from '@/data/services';

type VisitPreview = { name: string; serviceName: string; price: number; date: string; time: string };
const storageKey = 'royal-blades-visit-preview';
const subscribe = () => () => {};
const getSnapshot = () => typeof window === 'undefined' ? '' : window.sessionStorage.getItem(storageKey) ?? '';
const getServerSnapshot = () => '';

function getPreview(raw: string): VisitPreview | null {
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== 'object') return null;
    const preview = value as Partial<VisitPreview>;
    if (typeof preview.name !== 'string' || typeof preview.serviceName !== 'string' || typeof preview.price !== 'number' || typeof preview.date !== 'string' || typeof preview.time !== 'string') return null;
    if (!Number.isFinite(preview.price) || !/^\d{4}-\d{2}-\d{2}$/.test(preview.date)) return null;
    return preview as VisitPreview;
  } catch {
    return null;
  }
}

function formatVisitDate(value: string) {
  return new Intl.DateTimeFormat('en-PK', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${value}T12:00:00`));
}

export function BookingReview() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const preview = getPreview(raw);

  if (!preview) {
    return (
      <section className="booking-confirmation" aria-labelledby="review-title">
        <span className="eyebrow">VISIT PLANNER</span>
        <h2 id="review-title">No visit preview to review yet.</h2>
        <p className="booking-confirmation__notice">Choose a service, date, and time to create a preview. It stays in this browser tab and is not sent to the shop.</p>
        <Link className="button button--lime" href="/book">Plan your visit <span aria-hidden="true">↗</span></Link>
      </section>
    );
  }

  return (
    <section className="booking-confirmation" aria-labelledby="review-title">
      <span className="eyebrow">STEP 2 · REVIEW YOUR VISIT</span>
      <h2 id="review-title">Looking good, {preview.name}.</h2>
      <p className="booking-confirmation__notice">Review your details before planning your trip. This is a preview only; your visit is not booked or confirmed.</p>
      <dl className="booking-summary">
        <div><dt><Scissors size={14} aria-hidden="true" /> Service</dt><dd>{preview.serviceName}</dd></div>
        <div><dt>Estimated price</dt><dd>{formatPrice(preview.price)}</dd></div>
        <div><dt><CalendarBlank size={14} aria-hidden="true" /> Date</dt><dd>{formatVisitDate(preview.date)}</dd></div>
        <div><dt><Clock size={14} aria-hidden="true" /> Time</dt><dd>{preview.time}</dd></div>
        <div className="booking-summary__wide"><dt><MapPin size={14} aria-hidden="true" /> Location</dt><dd>{business.address.street}, {business.address.city}</dd></div>
      </dl>
      <div className="booking-review__actions">
        <Link className="button button--outline" href="/book"><ArrowLeft size={16} aria-hidden="true" /> Edit details</Link>
        <Link className="button button--lime" href="/visit">View visit details <span aria-hidden="true">↗</span></Link>
      </div>
      <p className="booking-review__note">To confirm an appointment, contact Royal Blades directly. No booking system is connected to this website.</p>
    </section>
  );
}
