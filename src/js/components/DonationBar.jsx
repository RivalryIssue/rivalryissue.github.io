import PropTypes from 'prop-types';

const DonationBar = ({ amount, color }) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0
	});

	const goal = 15000;
	const percentage = (amount / goal) * 100;

	return (
		<div className="donation_container">
			<div
				style={{
					maxWidth: '900px',
					margin: '0 auto',
					padding: '1rem',
					boxSizing: 'border-box',
					height: 'fit-content'
				}}
			>
				<div style={{ textAlign: 'center', marginBottom: '5px' }}>
					{formatter.format(amount)} out of {formatter.format(goal)} goal
				</div>
				<div
					style={{
						width: '100%',
						height: '30px',
						background: `linear-gradient(to right, ${color} ${percentage}%, lightgray ${percentage}% 100%)`
					}}
				/>
			</div>
		</div>
	);
};

DonationBar.propTypes = {
	organization: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired
};

export default DonationBar;
