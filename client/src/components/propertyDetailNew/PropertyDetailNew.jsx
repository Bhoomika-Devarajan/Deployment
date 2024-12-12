import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import img from '../../assets/estate3.jpg';
import emailjs from '@emailjs/browser';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBed, FaSquareFull } from 'react-icons/fa';
import { request } from '../../util/fetchAPI';
import classes from './propertyDetail.module.css';

const PropertyDetailNew = () => {
    const { user } = useSelector((state) => state.auth);
    const [propertyDetailNew, setPropertyDetailNew] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const { id } = useParams();
    const formRef = useRef();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const data = await request(`/property/find/${id}`, 'GET');
                setPropertyDetailNew(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchDetails();
    }, [id]);

    const handleCloseForm = () => {
        setShowForm(false);
        setTitle("");
        setDesc("");
        setMessage(""); // Clear message on form close
    };

    const handleContactOwner = async (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                console.log(result);
                setMessage('Email sent successfully!');
                setTimeout(() => {
                    setShowForm(false);
                    setTitle("");
                    setDesc("");
                    setMessage("");
                }, 3000); // Hide popup message after 3 seconds
            })
            .catch((error) => {
                console.log(error);
                setMessage('Failed to send email. Please try again.');
            });
    };

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <img src={propertyDetailNew?.img ? `http://localhost:2000/images/${propertyDetailNew.img}` : img} alt="Property" />
                </div>
                <div className={classes.right}>
                    <h3 className={classes.title}>
                        Title: {propertyDetailNew?.title}
                    </h3>
                    <div className={classes.details}>
                        <div className={classes.typeAndContinent}>
                            <div>Type: <span>{propertyDetailNew?.type}</span></div>
                            <div>Continent: <span>{propertyDetailNew?.continent}</span></div>
                        </div>
                        <div className={classes.priceAndOwner}>
                            <span className={classes.price}><span>Price:$</span>{propertyDetailNew?.price}</span>
                            <span style={{ display: 'flex', alignItems: "center", gap: '12px' }}>
                                Owner <img src={propertyDetailNew?.currentOwner?.profileImg ? `http://localhost:2000/images/${propertyDetailNew.currentOwner.profileImg}` : img} alt="Owner" />
                            </span>
                        </div>
                        <div className={classes.moreDetails}>
                            <span>{propertyDetailNew?.beds}<FaBed className={classes.icon} /></span>
                            <span>{propertyDetailNew?.sqmeters}<FaSquareFull className={classes.icon} /></span>
                        </div>
                    </div>
                    <p className={classes.desc}>
                        Description: <span>{propertyDetailNew?.desc}</span>
                    </p>
                    <button onClick={() => setShowForm(true)} className={classes.contactOwner}>
                        Contact Owner
                    </button>
                </div>
            </div>
            {showForm && (
                <div className={classes.contactForm} onClick={handleCloseForm}>
                    <div className={classes.contactFormWrapper} onClick={(e) => e.stopPropagation()}>
                        <h2>Send Email To Owner</h2>
                        <form onSubmit={handleContactOwner} ref={formRef}>
                            <input type="text" placeholder='My email' name="from_email" />
                            <input type="text" placeholder='My username' name="from_username" />
                            <input type="email" placeholder='Owner email' name="to_email" />
                            <input type="text" placeholder='Desc' name="message" onChange={(e) => setDesc(e.target.value)} />
                            <button type="submit">Send</button>
                        </form>
                        <AiOutlineClose onClick={handleCloseForm} className={classes.removeIcon} />
                    </div>
                </div>
            )}
            {message && (
                <div className={classes.messagePopup}>
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
};

export default PropertyDetailNew;
