import React from 'react';
import classes from './propertyDetail.module.css';
import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import img from '../../assets/estate3.jpg';
import emailjs from '@emailjs/browser';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBed, FaSquareFull } from 'react-icons/fa';
import { request } from '../../util/fetchAPI';
import person from '../../assets/person.jpg';
import MortgageCalculator from '../MortgageCalculator';
import ChatbotComponent from '../chatbot/Chatbot';

const PropertyDetail = () => {
    const { user } = useSelector((state) => state.auth);
    const [propertyDetail, setPropertyDetails] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [showChatbot, setShowChatbot] = useState(false); // State for chatbot visibility
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
                setPropertyDetails(data);
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
            alert('Email sent successfully!');
            setShowForm(false);
            setTitle("");
            setDesc("");
            setMessage("");
        })
        .catch((error) => {
            console.log(error);
            alert('Failed to send email. Please try again.');
        });
    };

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <img 
                    src={propertyDetail?.img ? `http://localhost:2000/images/${propertyDetail.img}` : img} 
                    alt="Property" 
                    onError={(e) => { e.target.onerror = null; e.target.src = `${propertyDetail?.img}`; }} 
                />
                <div className={classes.details}>
                    <h3 className={classes.title}>
                        Title: {`${propertyDetail?.title}`}
                    </h3>
                    <div className={classes.priceAndOwner}>
                        <span className={classes.price}><span>Price: $</span>{`${propertyDetail?.price}`}</span>
                    </div>
                    <div className={classes.moreDetails}>
                        <span>{propertyDetail?.beds}<FaBed className={classes.icon} /></span>
                        <span>{propertyDetail?.sqmeters}<FaSquareFull className={classes.icon} /></span>
                    </div>
                    <div className={classes.typeAndContinent}>
                        <div>Type: <span>{`${propertyDetail?.type}`}</span></div>
                        <div>Continent: <span>{`${propertyDetail?.continent}`}</span></div>
                    </div>
                    <p className={classes.desc}>
                        Description: <span>{`${propertyDetail?.desc}`}</span>
                    </p>
                    <button onClick={() => setShowForm(true)} className={classes.contactOwners}>
                        Contact Owner
                    </button>
                </div>
            </div>
            <div className={classes.right}>
                <MortgageCalculator />
                {/* Chatbot icon to toggle visibility */}
                <button 
                    className={classes.chatbotIcon} 
                    onClick={() => setShowChatbot(!showChatbot)}
                >
                    Chat
                </button>
                {/* Conditionally render chatbot popup */}
                {showChatbot && (
                    <div className={classes.chatbotPopup} onClick={() => setShowChatbot(false)}>
                        <div className={classes.chatbotPopupContent} onClick={(e) => e.stopPropagation()}>
                            <ChatbotComponent />
                            <AiOutlineClose 
                                onClick={() => setShowChatbot(false)} 
                                className={classes.closeChatbotIcon} 
                            />
                        </div>
                    </div>
                )}
            </div>
            {showForm && (
                <div className={classes.contactForms} onClick={handleCloseForm}>
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

export default PropertyDetail;
