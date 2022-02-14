import React from 'react';

interface IProps { children?: React.ReactNode, className?: string, fill?: string, viewBox?: string, width?: string, height?: string };

const SvgIcon = ({ children, className, viewBox, width, height, fill }: IProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={className !== undefined ? className : ''}
		viewBox={viewBox !== undefined ? viewBox : '0 0 24 24'}
		width={width !== undefined ? width : '24'}
		height={height !== undefined ? height : '24'}
		fill={fill !== undefined ? fill : ''}>
		{children}
	</svg>
);

export const MoneyOn = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" /></SvgIcon>;
export const MoneyOff = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13zM5.47 3.92L4.06 5.33 7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.83-.55 2.46-1.12l2.22 2.22 1.41-1.41L5.47 3.92z" /></SvgIcon>;
export const Lock = (props: IProps) => <SvgIcon {...props}><g fill="none"><path d="M0 0h24v24H0V0z" /><path d="M0 0h24v24H0V0z" opacity=".87" /></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></SvgIcon>;
export const Unlock = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></SvgIcon>;
// export const FTMIcon = (props: IProps) => <SvgIcon {...props} viewBox='0 0 32 32'>
// 	<defs xmlns="http://www.w3.org/2000/svg">
// 		<style>.cls-1{fill:#fff;fill-rule:evenodd;}.cls-3{mask:url(#mask);}</style>
// 		<mask id="mask" x="10" y="6" width="93.1" height="20" maskUnits="userSpaceOnUse"><g id="a">
// 			<path className="cls-1" d="M10,6h93.1V26H10Z" />
// 		</g>
// 		</mask>
// 	</defs>
// 	<g xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2">
// 		<g id="Layer_1-2" data-name="Layer 1">
// 			<circle fill="#13b5ec" cx="16" cy="16" r="16" />
// 			<g mask={"url(#mask)"}>
// 				<path class="cls-1" d="M17.2,12.9l3.6-2.1V15Zm3.6,9L16,24.7l-4.8-2.8V17L16,19.8,20.8,17ZM11.2,10.8l3.6,2.1L11.2,15Zm5.4,3.1L20.2,16l-3.6,2.1Zm-1.2,4.2L11.8,16l3.6-2.1Zm4.8-8.3L16,12.2,11.8,9.8,16,7.3ZM10,9.4V22.5l6,3.4,6-3.4V9.4L16,6Z" />
// 			</g>
// 		</g>
// 	</g>
// </SvgIcon>