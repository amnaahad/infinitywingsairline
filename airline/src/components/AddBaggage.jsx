import React from 'react';
import { useNavigate } from 'react-router-dom';
import FlightHeader from '../components/FlightHeader';

const AddBaggage = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = React.useState(false);

    // Retrieve baggageInfo from sessionStorage
    const baggageInfo = JSON.parse(sessionStorage.getItem('baggageInfo')) || {};

    const styles = {
        container: {
            padding: '20px',
            fontFamily: "'Roboto', sans-serif",
            backgroundColor: '#f7f7f7',
        },
        headerContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            borderBottom: '1px solid #ddd',
            paddingBottom: '10px',
        },
        headerTitle: {
            fontSize: '1.5rem',
            color: '#333',
            fontWeight: '600',
        },
        headerSubtitle: {
            fontSize: '1rem',
            color: '#555',
        },
        skipLink: {
            color: '#6c757d',
            textDecoration: 'none',
            fontWeight: '500',
        },
        contentContainer: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        baggageSection: {
            flex: 3,
            marginRight: '20px',
        },
        baggageCard: {
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            padding: '20px',
            marginBottom: '20px',
        },
        cardHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #eee',
            paddingBottom: '10px',
            marginBottom: '15px',
        },
        baggageInfo: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
        },
        baggageIcon: {
            fontSize: '2rem',
            color: '#007bff',
            marginRight: '15px',
        },
        baggageDetails: {
            fontSize: '1rem',
            color: '#444',
        },
        included: {
            color: '#28a745',
            fontWeight: '500',
            marginLeft: '10px',
        },
        checkedBaggage: {
            marginTop: '20px',
        },
        note: {
            fontSize: '0.875rem',
            color: '#888',
            marginBottom: '10px',
        },
        baggageSummary: {
            flex: 1,
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            padding: '20px',
        },
        summaryTitle: {
            fontSize: '1.25rem',
            color: '#333',
            fontWeight: '600',
            marginBottom: '20px',
        },
        confirmButton: {
            width: '30%',
            padding: '12px',
            backgroundColor: isHovered ? '#5a6268' : '#ff4d4f',
            color: 'white',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            textAlign: 'center',
            transition: 'background-color 0.3s ease',
        },
    };

    return (
        <>
            <FlightHeader />
            <div style={styles.container}>
                <br />
                <div style={styles.headerContainer}>
                    <div>
                        <div style={styles.headerTitle}>Baggage for your trip</div>
                    </div>
                    <button
                        style={styles.confirmButton}
                        onClick={() => navigate('/pay-confirm')}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Continue to Payment
                    </button>
                </div>

                <div style={styles.contentContainer}>
                    <div style={styles.baggageSection}>
                        <div style={styles.baggageCard}>
                            <div style={styles.cardHeader}></div>
                            
                            {baggageInfo.carryOn && (
                                <div style={styles.baggageInfo}>
                                    <div style={styles.baggageIcon}>🎒</div>
                                    <div style={styles.baggageDetails}>
                                        <strong>Carry-on baggage</strong>
                                        <span style={styles.included}>Included</span>
                                        <p>{baggageInfo.carryOn}</p>
                                    </div>
                                </div>
                            )}
                            {baggageInfo.checked && (
                                <div style={styles.baggageInfo}>
                                    <div style={styles.baggageIcon}>🧳</div>
                                    <div style={styles.baggageDetails}>
                                        <strong>Checked baggage</strong>
                                        <span style={styles.included}>Included</span>
                                        <p>{baggageInfo.checked}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddBaggage;
