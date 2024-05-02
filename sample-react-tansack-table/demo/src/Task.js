import React, { useState, useEffect } from 'react';

// Sample data representing vendor fee periods
const vendorFeeVendor = [
    { vendor: 'ESI' },
    { vendor: 'ABC' },
    { vendor: 'ESI' },
    { vendor: 'XYZ' },
    { vendor: 'CareMark' }
];

const vendorFeePeriods = [
    { period: 'May 2024' },
    { period: 'Jun 2024' },
    { period: 'March 2024' },
    { period: 'April 2024' },
    { period: 'Dec 2024' }
];

const MyComponent = () => {
    const [vendors, setVendors] = useState([]);
    const [periods, setPeriods] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState('');
    const [selectedPeriod, setSelectedPeriod] = useState('');

    useEffect(() => {
        // Get unique vendors and periods
        const uniqueVendors = [...new Set(vendorFeeVendor.map(item => item.vendor))];
        const uniquePeriods = [...new Set(vendorFeePeriods.map(item => item.period))];

        setVendors(uniqueVendors);
        setPeriods(uniquePeriods);
    }, []);

    const handleVendorChange = (event) => {
        setSelectedVendor(event.target.value);

        // If the selected vendor is CareMark, hide March 2024 from the periods dropdown
        if (event.target.value === 'CareMark') {
            setPeriods(periods.filter(period => period !== 'March 2024'));
        } else {
            setPeriods([...new Set(vendorFeePeriods.map(item => item.period))]);
        }
    };

    const handlePeriodChange = (event) => {
        setSelectedPeriod(event.target.value);
    };

    return (
        <div>
            <label htmlFor="vendor">Vendor:</label>
            <select id="vendor" value={selectedVendor} onChange={handleVendorChange}>
                <option value="">Select Vendor</option>
                {vendors.map(vendor => (
                    <option key={vendor} value={vendor}>{vendor}</option>
                ))}
            </select>

            <label htmlFor="period">Period:</label>
            <select id="period" value={selectedPeriod} onChange={handlePeriodChange}>
                <option value="">Select Period</option>
                {periods.map(period => (
                    <option key={period} value={period}>{period}</option>
                ))}
            </select>

            <table>
                <thead>
                <tr>
                    <th>Vendor</th>
                    <th>Period</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                {vendorFeeVendor.map((item, index) => {
                    if (item.vendor === selectedVendor && vendorFeePeriods[index].period === selectedPeriod) {
                        return (
                            <tr key={`${item.vendor}-${vendorFeePeriods[index].period}`}>
                                <td>{item.vendor}</td>
                                <td>{vendorFeePeriods[index].period}</td>
                                <td>{/* Add data here */}</td>
                            </tr>
                        );
                    } else {
                        return null;
                    }
                })}
                </tbody>
            </table>
        </div>
    );
};

export default MyComponent;
