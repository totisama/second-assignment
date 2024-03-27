'use client'

import { ModalContext, ModalContextType } from '@/context/ModalProvider'
import { useContext } from 'react'

export const Modal = () => {
  const { open } = useContext(ModalContext) as ModalContextType

  return (
    <>
      {open ? (
        <div
          style={{
            position: 'fixed',
            backgroundColor: '#e3e3e3',
            maxWidth: 1000,
            top: 0,
            left: 0,
            zIndex: 1000,
            padding: 20,
          }}
        >
          <form
            className="booking-form row"
            role="form"
            action="/api/reserve"
            method="post"
          >
            <div className="col-lg-6 col-12">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="col-lg-6 col-12">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                id="email"
                pattern="[^ @]*@[^ @]*"
                className="form-control"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="col-lg-6 col-12">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>

              <input
                type="telephone"
                name="phone"
                id="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="form-control"
                placeholder="123-456-7890"
              />
            </div>

            <div className="col-lg-6 col-12">
              <label htmlFor="people" className="form-label">
                Number of persons
              </label>

              <input
                type="text"
                name="people"
                id="people"
                className="form-control"
                placeholder="12 persons"
              />
            </div>

            <div className="col-lg-6 col-12">
              <label htmlFor="date" className="form-label">
                Date
              </label>

              <input
                type="date"
                name="date"
                id="date"
                value=""
                className="form-control"
              />
            </div>

            <div className="col-lg-6 col-12">
              <label htmlFor="time" className="form-label">
                Time
              </label>

              <select
                className="form-select form-control"
                name="time"
                id="time"
              >
                <option value="5" selected>
                  5:00 PM
                </option>
                <option value="6">6:00 PM</option>
                <option value="7">7:00 PM</option>
                <option value="8">8:00 PM</option>
                <option value="9">9:00 PM</option>
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Special Request
              </label>

              <textarea
                className="form-control"
                rows={4}
                id="message"
                name="message"
                placeholder=""
              ></textarea>
            </div>

            <div className="col-lg-4 col-12 ms-auto">
              <button type="submit" className="form-control">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  )
}
