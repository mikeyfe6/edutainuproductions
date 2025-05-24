import * as React from "react";

import { Link } from "gatsby";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSiteMetadata } from "../../hooks/use-site-metadata";

import * as formStyles from "../../styles/modules/forms/form.module.scss";

const Form: React.FC = () => {
    const { email } = useSiteMetadata();

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isPrivacyChecked, setIsPrivacyChecked] = React.useState(false);
    const [isTermsChecked, setIsTermsChecked] = React.useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

    const isFormValid =
        formData.firstName.trim() !== "" &&
        formData.lastName.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.message.trim() !== "" &&
        isPrivacyChecked &&
        isTermsChecked &&
        !isSubmitting;

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>,
        form: HTMLFormElement | null
    ) => {
        event.preventDefault();
        if (!form) return;
        setIsSubmitting(true);

        try {
            const encodedData = new URLSearchParams(
                new FormData(form) as any
            ).toString();

            if (window.location.hostname === "localhost") {
                console.log("Form data:", encodedData);
                alert("Form submission simulated (check console). ");
                setIsSubmitting(false);
                return;
            }

            await axios.post("/", encodedData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            setShowSuccessMessage(true);

            setFormData({
                firstName: "",
                lastName: "",
                company: "",
                phone: "",
                email: "",
                message: "",
            });

            setIsPrivacyChecked(false);
            setIsTermsChecked(false);

            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 10000);
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Er is iets misgegaan bij het versturen van het formulier.");
        }

        setIsSubmitting(false);
    };

    return (
        <section className={formStyles.form} id="contact">
            <div>
                <div>
                    <h2>Kennismaken?</h2>
                    <p>
                        <b>Ik sta klaar om jou te helpen!</b>
                    </p>

                    <ul>
                        <li>
                            <a
                                href={`mailto:${email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={["fas", "envelopes-bulk"]}
                                    size="lg"
                                />
                                <span>·</span>
                                <p>{email}</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <form
                    name="eup-form"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={(event) =>
                        handleSubmit(event, document.querySelector("form"))
                    }
                >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="eup-form" />

                    <div>
                        <label htmlFor="formFirstName">Voornaam</label>
                        <input
                            type="text"
                            name="firstName"
                            id="formFirstName"
                            placeholder="Voornaam *"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="formLastName">Achternaam</label>
                        <input
                            type="text"
                            name="lastName"
                            id="formLastName"
                            placeholder="Achternaam *"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="formCompany">Bedrijfsnaam</label>
                        <input
                            type="text"
                            name="company"
                            id="formCompany"
                            placeholder="Bedrijfsnaam"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="formPhoneNr">Telefoonnummer</label>
                        <input
                            type="tel"
                            name="phone"
                            id="formPhoneNr"
                            placeholder="Telefoonnummer"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="formEmail">E-mailadres</label>
                        <input
                            type="email"
                            name="email"
                            id="formEmail"
                            placeholder="E-mailadres *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="formMessage">Bericht</label>
                        <textarea
                            name="message"
                            id="formMessage"
                            rows={7}
                            placeholder="Bericht *"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <div>
                            <input
                                type="checkbox"
                                id="formPrivacyPolicy"
                                required
                                checked={isPrivacyChecked}
                                onChange={(e) =>
                                    setIsPrivacyChecked(e.target.checked)
                                }
                            />
                            <label htmlFor="formPrivacyPolicy">
                                Ik ga akkoord met de{" "}
                                <Link to="/algemene-voorwaarden/#voorwaarden">
                                    algemene voorwaarden
                                </Link>{" "}
                                en{" "}
                                <Link to="/privacy-beleid/#beleid">
                                    privacy statement
                                </Link>{" "}
                                <span>*</span>
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="formTermsAndConditions"
                                required
                                checked={isTermsChecked}
                                onChange={(e) =>
                                    setIsTermsChecked(e.target.checked)
                                }
                            />
                            <label htmlFor="formTermsAndConditions">
                                Ik ga akkoord met de verwerking van mijn
                                gegevens <span>*</span>
                            </label>
                        </div>
                    </div>

                    <div className={formStyles.submit}>
                        {showSuccessMessage && (
                            <span>
                                Bericht verzonden!
                                <FontAwesomeIcon
                                    icon={["fas", "paper-plane"]}
                                    size="lg"
                                />
                            </span>
                        )}

                        <button type="submit" disabled={!isFormValid}>
                            {isSubmitting ? "Versturen ..." : "Versturen"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Form;
