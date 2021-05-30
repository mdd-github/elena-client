import React from 'react';
import cBackgroundSvg from '../../../assets/images/c-background.svg';

export const CompatibilityMatrix = (props) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 304.27 264.58">
			<image width="304.27" height="264.58" preserveAspectRatio="none" xlinkHref={cBackgroundSvg}/>
			<g strokeWidth="0.265" fontFamily="Montserrat" fontWeight="bold" textAnchor="middle">
				<g fill="#fff">
					<text x="154.678" y="120.059" fontSize="6.35" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[19] }
					</text>
					<g fontSize="9.878">
						<text x="43.877" y="158.086" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
							{ props.values[0] }
						</text>
						<text x="155.037" y="47.161" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
							{ props.values[2] }
						</text>
						<text x="266.057" y="158.233" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
							{ props.values[4] }
						</text>
						<text x="155.037" y="269.423" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
							{ props.values[6] }
						</text>
					</g>
				</g>
				<g fontSize="9.878">
					<text x="76.503" y="236.76" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
							{ props.values[7] }
					</text>
					<text x="76.534" y="79.723" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
							{ props.values[1] }
					</text>
					<text x="233.572" y="79.691" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
							{ props.values[3] }
					</text>
					<text x="233.54" y="236.729" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
							{ props.values[5] }
					</text>
					<text x="155.037" y="159.089" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[20] }
					</text>
				</g>
				<g fontSize="7.761">
					<text x="65.682" y="157.472" fill="#fff" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
							{ props.values[8] }
					</text>
					<text x="155.015" y="68.236" fill="#fff" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[9] }
					</text>
					<text x="244.208" y="157.472" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[10] }
					</text>
					<text x="155.015" y="246.842" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[11] }
					</text>
				</g>
				<text x="229.642" y="156.97" fill="#fff" fontSize="6.35" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[14] }
				</text>
				<g fontSize="6.35">
					<text x="206.266" y="185.059" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[15] }
					</text>
					<text x="186.574" y="188.897" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[16] }
					</text>
					<text x="183.742" y="207.656" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[19] }
					</text>
				</g>
				<g fill="#fff" fontSize="6.35">
					<text x="155" y="231.788" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[22] }
					</text>
					<text x="80.22" y="156.97" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[12] }
					</text>
					<text
						x="117.61"
						y="156.97" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[18] }
					</text>
					<text x="155" y="82.286" style={{ lineHeight: "1.25" }} transform="translate(-4.35 -22.484)">
						{ props.values[13] }
					</text>
				</g>
			</g>
		</svg>
	);
};