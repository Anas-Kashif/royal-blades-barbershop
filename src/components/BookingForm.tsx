'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { CalendarBlank, Clock, MapPin } from '@phosphor-icons/react';
import { business } from '@/data/business';
import { formatPrice, services } from '@/data/services';

type BookingFormProps = {
  initialService?: string;
};

type Preview = {
  name: string;
  serviceName: string;
  price: number;
  date: string;
  time: string;
};

function getAvailableTimes(date: string, duration: string) {
  if (!date) return [];

  const selectedDay = new Date(`${date}T12:00:00`).getDay();
  const opensAt = selectedDay === 0 ? 11 * 60 : 10 * 60;
  const closesAt = selectedDay === 0 ? 15 * 60 + 30 : 18 * 60;
  const durationMinutes = Number.parseInt(duration, 10) || 30;
  const times: string[] = [];

  for (let minutes = opensAt; minutes + durationMinutes <= closesAt; minutes += 30) {
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    const period = hours >= 12 ? 'pm' : 'am';
    const displayHour = hours % 12 || 12;
    times.push(`${displayHour}:${String(remainder).padStart(2, '0')} ${period}`);
  }

  return times;
}

function getLocalDateValue() {
  const today = new Date();
  return new Date(today.getTime() - today.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
}

export function BookingForm({ initialService = '' }: BookingFormProps) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [serviceSlug, setServiceSlug] = useState(initialService);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');

  const selectedService = services.find((service) => service.slug === serviceSlug);
  const availableTimes = useMemo(
    () => getAvailableTimes(date, selectedService?.duration ?? '30 min'),
    [date, selectedService],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!selectedService || !date || !time || !name.trim()) {
      setError('Please complete your name, service, date, and time.');
      return;
    }

    if (date < getLocalDateValue()) {
      setError('Choose today or a future date.');
      return;
    }

    if (!availableTimes.includes(time)) {
      setError('Choose a time within the selected day’s opening hours.');
      return;
    }

    const visitPreview: Preview = { name: name.trim(), serviceName: selectedService.name, price: selectedService.price, date, time };
    sessionStorage.setItem('royal-blades-visit-preview', JSON.stringify(visitPreview));
    router.push('/book/review');
  }

  return (
    <div className="booking-layout">
      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <div className="form-heading">
          <span className="eyebrow">PLAN YOUR VISIT</span>
          <h2>Choose a time that works.</h2>
          <p>Build a visit preview in a few quick steps.</p>
        </div>

        <label className="field">
          <span>Your name</span>
          <input autoComplete="name" name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Ahsan" required />
        </label>

        <label className="field">
          <span>Choose a service</span>
          <select name="service" value={serviceSlug} onChange={(event) => { setServiceSlug(event.target.value); setTime(''); }} required>
            <option value="">Select a service</option>
            {services.map((service) => <option key={service.slug} value={service.slug}>{service.name} · {formatPrice(service.price)}</option>)}
          </select>
        </label>

        <div className="field-row">
          <label className="field">
            <span><CalendarBlank size={15} aria-hidden="true" /> Date</span>
            <input type="date" name="date" value={date} onChange={(event) => { setDate(event.target.value); setTime(''); }} required />
          </label>
          <label className="field">
            <span><Clock size={15} aria-hidden="true" /> Time</span>
            <select name="time" value={time} onChange={(event) => setTime(event.target.value)} disabled={!date || !serviceSlug} required>
              <option value="">{date ? 'Choose a time' : 'Select a date first'}</option>
              {availableTimes.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
            </select>
          </label>
        </div>

        <p className="booking-form__fineprint">A preview only. Nothing is sent or stored, and your appointment is not confirmed.</p>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button button--lime booking-form__submit" type="submit">Preview your visit <span aria-hidden="true">↗</span></button>
      </form>

      <aside className="booking-aside">
        <div className="booking-aside__art" aria-hidden="true"><div className="booking-aside__ring" /><span>RB</span></div>
        <div className="booking-aside__details">
          <p><MapPin size={18} aria-hidden="true" /><span>{business.address.street}<br />{business.address.city}, {business.address.country}</span></p>
          <p><Clock size={18} aria-hidden="true" /><span>Mon to Sat <strong>10 am to 6 pm</strong><br />Sunday <strong>11 am to 3:30 pm</strong></span></p>
        </div>
      </aside>
    </div>
  );
}
