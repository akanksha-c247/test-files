import React from "react";

export const validateForm = (formData) => {
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formData.telephone) {
        errors.telephone = "Telephone is required";
      } else if (!/^\d{10}$/.test(formData.telephone)) {
        errors.telephone = "Telephone number must be 10 digits";
      }

    if (!formData.company) {
      errors.company = "Company is required";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    return errors;
  };
