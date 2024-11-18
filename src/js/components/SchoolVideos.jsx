import 'lite-youtube-embed/src/lite-yt-embed';
import 'lite-youtube-embed/src/lite-yt-embed.css';

import PropTypes from 'prop-types';
import DonationButton from './DonationButton';

const SchoolVideos = ({ school, isMobile, lanternMoney, dailyMoney }) => {

	if (isMobile && school === '') {
		return <></>;
	}

	return (
		<div className="container">
			<div className="schoolVideoContainer">
				{(school === "daily" || !isMobile) &&
					(<>
						<div className="schoolVideo">
							<p className="schoolName">The Michigan Daily</p>
							<div className="player-wrapper">
								<lite-youtube key={"daily"} videoid="QDQyN1tOd3M" playlabel="Michigan Daily Rivalry Edition 2024" />
							</div>
							<DonationButton school={"daily"} lanternMoney={lanternMoney} dailyMoney={dailyMoney} isMobile={isMobile} />
						</div>

					</>
					)
				}
				{(school === "lantern" || !isMobile) &&
					(<>
						<div className="schoolVideo">
							<p className="schoolName">The Lantern</p>
							<div className="player-wrapper">
								<lite-youtube
									key={"lantern"}
									videoid="u6F5QBY2S0Q"
									playlabel="The Lantern vs. Michigan Daily Rivalry 2024"
								/>
							</div>
							<DonationButton school={"lantern"} lanternMoney={lanternMoney} dailyMoney={dailyMoney} isMobile={isMobile} />
						</div>
					</>)
				}
			</div>
		</div>
	)
};

SchoolVideos.propTypes = {
	school: PropTypes.string.isRequired,
	isMobile: PropTypes.bool.isRequired,
	lanternMoney: PropTypes.number.isRequired,
	dailyMoney: PropTypes.number.isRequired
};


export default SchoolVideos;
