import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrivacyPolicy.scss';
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';

const PrivacyPolicy = props => (
	<div className="Privacy-policy">
		<Media>
			<Media.Body style={{height:'100vh'}}>
				<Card bg="dark" text="light">
					<Card.Title className="title-text"> Privacy Policy </Card.Title>
					<Card.Body>
						<Card.Text className="general-text">
							<ul>
								<li>
									VisualPlasma app, does not collect or store user's data.
								</li>
								<li>
									The only data that the app has access to are the images files that the user has explicitly selected and provided access. 
								</li>
								<li>
									And these images are stored in app's local cache/files directory (i.e user's personal device).
								</li>
								<li>
									All the local cache/files directory of the app will be deleted when the app in uninstalled from the device.
								</li>
								<li>
									App listens to MIDI data received from a device selected by user and generates visuals based on the input received.	
								</li>
								<li>
									App also requires MIDI, and internal/external memory access on user's device, this is to save the app settings on the local cache folder.
								</li>
								<li>
									App also requires internet access in order to display the help-guide and the app privacy-policy.
								</li>
							</ul>
						</Card.Text>
					</Card.Body>
				</Card>				
			</Media.Body>
		</Media>
	</div>
);



const PrivacyPolicyPropTypes = {
	// always use prop types!
};

PrivacyPolicy.propTypes = PrivacyPolicyPropTypes;

export default PrivacyPolicy;
