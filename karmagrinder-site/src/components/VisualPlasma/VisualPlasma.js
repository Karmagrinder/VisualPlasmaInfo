import React from 'react';
import PropTypes from 'prop-types';
import styles from './VisualPlasma.scss';
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';
import ResponsiveEmbed from 'react-responsive-embed';

// Image  imports
import Screenshot from '../../res/Screenshot.jpg';
import Screenshot_MidiNote from '../../res/Screenshot3.jpg';
import Screenshot_MediaAction from '../../res/Screenshot4.jpg';
import Screenshot_ActionTypes from '../../res/Screenshot5.jpg';
import Screenshot_FxTypes from '../../res/Screenshot6.jpg';
import Screenshot_loadMappings from '../../res/Screenshot8.jpg';
import UserGuide1 from '../../res/UserGuide1.png';
import UserGuide2 from '../../res/UserGuide2.png';
import ConnectionDiag from '../../res/ConnectionDiag.png';

const demoVideoUrl = "https://www.youtube.com/embed/aMXpVZAsE_M";

// 646 x 250

const VisualPlasma = props => (
	<div>
		<Media>
			<Media.Body>
				<Card bg="dark" text="light">
					<Card.Title className="title-text">VisualPlasma App Help</Card.Title>
					<Card.Body>
						<Card.Text className="general-text">							
							This app generates visuals triggered by MIDI signals.
							In order to use this app, it is required that you make yourself familiar with basic concepts of MIDI.								
						</Card.Text>
						<div className="play-store-link">
							<a href='https://play.google.com/store/apps/details?id=com.e.VisualPlasma&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
								<img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
									width={215}
									height={80}
								/>
							</a>
						</div>
						<div >
							<ResponsiveEmbed src={demoVideoUrl} allowfullscreen />
						</div>
					</Card.Body>
					<Card.Body>
						<Card bg="dark" text="light">
							<Card.Title className="title-text" >1. CONNECTING MIDI DEVICE</Card.Title>
							<Card.Subtitle className="subtitle-text">a) Supported devices:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									You should be able to use any class complaint MIDI device.
									<br />
								</Card.Text>
							</Card.Body>

							<Card.Subtitle className="subtitle-text">a) Via Bluetooth:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									If your  MIDI device and your phone both  support MIDI over bluetooth you can connect your MIDI device wirelessly.
									You can use any of the available Bluetooth-MIDI apps on the google play store and connect your device to the  phone. 
									<br />
									Launch the app only after your MIDI device is connected to the phone.
									<br />
								</Card.Text>
								
							</Card.Body>
							<Card.Subtitle className="subtitle-text">b) Via USB-Cable:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									Connect the MIDI device to your phone via USB-OTG adapter.
									Also ensure that your phone supports USB-OTG functionality.
								</Card.Text>
							</Card.Body>
							<Card.Img variant="bottom" src={Screenshot} />
						</Card>						
						<Card bg="dark" text="light">
							<Card.Title className="title-text">2. MAPPINGS:</Card.Title>
							<Card.Body>
								<Card.Text className="general-text">
									A mapping is a binding  between a MIDI-note /signal and an action.
									<br />
									There are  two types of action a MIDI-note can be binded to, namely a) FX. b) Media.
									<br />
									A mapping has following properties:
									<ul>
										<li> a) MIDI-note </li>
										<li> b) MIDI-Channel </li>
										<li> c) Type (FX or Media)</li>
										<li> d) FxName / Media resource name</li>
									</ul>
									<br />
									# A combination of a MIDI-note and channel can be associated only to one mapping.									
								</Card.Text>
								<Card.Img variant="bottom" src={Screenshot_ActionTypes} />

							</Card.Body>
							<Card.Subtitle className="subtitle-text">2.1 Media:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									When a MIDI-note is mapped to action of type "Media", the visuals will be generated with the associated media file.
									<br />
									Currently only Images, and  GIFs are  supported as media types.
									<br />
								</Card.Text>
								<Card.Img variant="bottom" src={Screenshot_MediaAction} />
							</Card.Body>
							<Card.Subtitle className="subtitle-text">2.2 FX:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									This action applies the selected image-manipulation effect on to the currently active  media when it's associated MIDI note is triggered. 
									<br />									
								</Card.Text>
								<Card.Img variant="bottom" src={Screenshot_FxTypes} />
							</Card.Body>
							<Card.Subtitle className="subtitle-text">2.3 Create mapping:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									Follow these steps to create a mapping:
										<ul>
										<li>Press a kep/pad to trigger a MIDI note. The triggered note and channel will be displayed.</li>
										<li>Select type of trigger: FX or Media
												<ul>
												<li>Type-Fx: Select  one  of the available FX from the dropdown menu.</li>
												<li> Type-Media: If you click on the Media button, app will prompt a  file picket. You can then select an image or GIF file.</li>
											</ul>
										</li>
										<li>Press  the add button (+) to save create the mapping.</li>
										<li>Mapping will be displayed on  the table view.</li>
									</ul>
									<br />
									Refer to the layout guide mentioned in section 4.1
									<br />
								</Card.Text>
								<Card.Img variant="bottom" src={Screenshot_MidiNote} />
								<br/>
								<Card.Img variant="bottom" src={Screenshot_MediaAction} />
							</Card.Body>							
							<Card.Subtitle className="subtitle-text">2.4 Save mappings to file:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									If any mappings are available, the "save" button will become active, you can press the save button, and the mappings will be saved to a file.
									These saved mappings can be later recalled and loaded.
									<br />
									Refer to the layout guide mentioned in section 4.1
									<br />
								</Card.Text>
							</Card.Body>
							<Card.Subtitle className="subtitle-text">2.5 Load mappings from file:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									If any mappings file are available, they will be displayed on the top left corner of the screen.
									You can select any of the previously saved mappings file from the dropdown menu, and  press the "Load" button.
									The mappings from the file will be displayed on the table view.
									<br />
									Refer to the layout guide mentioned in section 4.1
									<br />
								</Card.Text>
								<Card.Img variant="bottom" src={Screenshot_loadMappings} />
							</Card.Body>
							<Card.Subtitle className="subtitle-text">2.6 Edit mapping:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									To edit a mapping, select the mapping in the table-view, the table view is scrollable. 
									The edit option will be activated on the screen wht the mapping is selected, also the mapping will be highlighted.
									Use the same procedure as "Create a mapping", and press  the edit button instead of the add (+) button.
									The selected mapping will be updated with the new changes.
									<br />
									Refer to the layout guide mentioned in section 4.2
									<br/>
								</Card.Text>
							</Card.Body>
							<Card.Subtitle className="subtitle-text">2.7 Delete mapping:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									When you select the mapping in the mappings-table, the delete-button will become active, you can perform the delete action and the mapping will be removed.
									<br />
									Refer to the layout guide mentioned in section 4.2
									<br />
								</Card.Text>
							</Card.Body>
						</Card>
						<Card bg="dark" text="light">
							<Card.Title className="title-text">3. Start Visuals</Card.Title>
							<Card.Body>
								<Card.Text className="general-text">
									Press on the "Eye" button to start the visuals. Press any of the mapped keys to trigger visuals.
									<br />
									The FX visuals are applied only if there is any media being displayed.
									<br />
									FX actions are applied only to still images, and are skipped if a GIF is active. 									
								</Card.Text>
							</Card.Body>
						</Card>

						<Card bg="dark" text="light">
							<Card.Title className="title-text">4. UI Layout:</Card.Title>
							<Card.Subtitle className="subtitle-text"> 4.1 Mappings configurator</Card.Subtitle>
							<Card.Img variant="top" src={UserGuide1} />
							<Card.Subtitle className="subtitle-text"> 4.2 Edit/Delete operations </Card.Subtitle>
							<Card.Img variant="top" src={UserGuide2} />
						</Card>

						<Card bg="dark" text="light">
							<Card.Title className="title-text">5. Connecting external screen/projector:</Card.Title>
							<Card.Subtitle className="subtitle-text"> </Card.Subtitle>
							<Card.Text>You can use the wireless-screen mirroring option if your screen/projector or chromecast device supports it.
										<br />
									 This option can result in slight lag in screen update, it is very much dependent on the wifi speed and signal strength.
								<br />
								The other option is to connect a HDMI cable directly to the phone, see the connection diagram below:
							</Card.Text>
							<Card.Img variant="top" src={ConnectionDiag} />
							<Card.Body>
								<Card.Text className="general-text">
									You can use a external docking station or port-replicator like Kingston Nucleam to connect an external monitor/screen/projector.									
								</Card.Text>
							</Card.Body>
						</Card>
						
						<Card bg="dark" text="light">
							<Card.Title className="title-text">6. Supported devices</Card.Title>
							<Card.Body>
								<Card.Text className="general-text">
									<ul>
										<li>
											Samsung s20, works with USB-OTG. Bluetooth MIDI  not working.
										</li>
										<li>
											Honor 8, works with both Bluetooth MIDI and  USB-OTG
										</li>
									</ul>
								</Card.Text>
							</Card.Body>							
						</Card>
					</Card.Body>
				</Card>	
			</Media.Body>
		</Media>

	</div>
);



const VisualPlasmaPropTypes = {
	// always use prop types!
};

VisualPlasma.propTypes = VisualPlasmaPropTypes;

export default VisualPlasma;
