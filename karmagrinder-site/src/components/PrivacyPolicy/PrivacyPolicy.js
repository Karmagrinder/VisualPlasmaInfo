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
							VisualPlasma app, does not collect or store user's data. The only data that the app has access to are the images files that the user has explicitly selected to give access to, 
							and these images are stored in app's local cache/files directory (i.e user's personal device).								
							App listens to MIDI data received from a device selected by user and generates visuals based  on the input received.								
							App also requires MIDI, and internal/external memory access on user's device, this is to save the user settings on the local cache folder, 
							this folder  will be deleted when the app is uninstalled.								
							App also requires internet access in order to display the help-guide and the app privacy-policy.		
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
