import React from "react";

interface IProps { children?: React.ReactNode, className?: string, fill?: string, viewBox?: string, width?: string, height?: string }

const SvgIcon = ({ children, className, viewBox, width, height, fill }: IProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className !== undefined ? className : ""}
        viewBox={viewBox !== undefined ? viewBox : "0 0 24 24"}
        width={width !== undefined ? width : "24"}
        height={height !== undefined ? height : "24"}
        fill={fill !== undefined ? fill : ""}>
        {children}
    </svg>
);
export const Launch = (props: IProps) => <SvgIcon {...props} ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></SvgIcon>;
export const MoneyOn = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" /></SvgIcon>;
export const MoneyOff = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13zM5.47 3.92L4.06 5.33 7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.83-.55 2.46-1.12l2.22 2.22 1.41-1.41L5.47 3.92z" /></SvgIcon>;
export const Lock = (props: IProps) => <SvgIcon {...props}><g fill="none"><path d="M0 0h24v24H0V0z" /><path d="M0 0h24v24H0V0z" opacity=".87" /></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></SvgIcon>;
export const Unlock = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></SvgIcon>;
export const Loading = (props: IProps) => <SvgIcon {...props} viewBox="0 0 100 100" width="150" height="150">
    <g transform="rotate(0 50 50)">
        <rect x="47" y="24" width="4" height="14" fill="#bbb">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
        </rect>
    </g><g transform="rotate(30 50 50)">
        <rect x="47" y="24" width="4" height="14" fill="#bbb">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
        </rect>
    </g><g transform="rotate(60 50 50)">
        <rect x="47" y="24" width="4" height="14" fill="#bbb">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
        </rect>
    </g><g transform="rotate(90 50 50)">
        <rect x="47" y="24" width="4" height="14" fill="#bbb">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
        </rect>
    </g><g transform="rotate(120 50 50)">
        <rect x="47" y="24" width="4" height="14" fill="#bbb">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
        </rect>
    </g><g transform="rotate(150 50 50)">
        <rect x="47" y="24" width="4" height="14" fill="#bbb">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
        </rect>
    </g><g transform="rotate(180 50 50)">
        <rect x="47" y="24" width="4" height="14" fill="#bbb">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
        </rect>
    </g><g transform="rotate(210 50 50)">
        <rect x="47" y="24" width="4" height="14" fill="#bbb">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
        </rect>
    </g><g transform="rotate(240 50 50)">
        <rect x="47" y="24" width="4" height="14" fill="#bbb">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
        </rect>
    </g><g transform="rotate(270 50 50)">
        <rect x="47" y="24" width="4" height="14" fill="#bbb">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
        </rect>
    </g><g transform="rotate(300 50 50)">
        <rect x="47" y="24" width="4" height="14" fill="#bbb">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
        </rect>
    </g><g transform="rotate(330 50 50)">
        <rect x="47" y="24" width="4" height="14" fill="#bbb">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
        </rect>
    </g>
</SvgIcon>;

export const CheckMark = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></SvgIcon>;
export const Cross = (props:  IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></SvgIcon>;
export const Warning = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/></SvgIcon>;

export const FTMIcon = (props: IProps) => <SvgIcon {...props} viewBox='0 0 32 32'>
    <defs xmlns="http://www.w3.org/2000/svg">
        <mask id="mask" x="10" y="6" width="93.1" height="20" maskUnits="userSpaceOnUse"><g id="a">
            <path className="cls-1" d="M10,6h93.1V26H10Z" />
        </g>
        </mask>
    </defs>
    <g xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
            <circle fill="#13b5ec" cx="16" cy="16" r="16" />
            <g>
                <path fill="#fff" fillRule='evenodd' d="M17.2,12.9l3.6-2.1V15Zm3.6,9L16,24.7l-4.8-2.8V17L16,19.8,20.8,17ZM11.2,10.8l3.6,2.1L11.2,15Zm5.4,3.1L20.2,16l-3.6,2.1Zm-1.2,4.2L11.8,16l3.6-2.1Zm4.8-8.3L16,12.2,11.8,9.8,16,7.3ZM10,9.4V22.5l6,3.4,6-3.4V9.4L16,6Z" />
            </g>
        </g>
    </g>
</SvgIcon>;

export const OrderIcon = (props: IProps) => <SvgIcon {...props} height="48" width="48" viewBox="0 -64 640 640">
    <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"/>
</SvgIcon>;

export const BalanceIcon = (props: IProps) => <SvgIcon {...props} height="48" width="48" viewBox="0 0 490.766 490.766">
    <path d="M472.554,319.199c-9.4-0.7-28.8,9.8-34.1,12.5c-18.9,9.5-45.2,24.4-62.5,36.3c-1.2,0.8-2.8,1.9-4,2.7
		c-7.8,5-16,8.3-25.1,10.3c-50.2,10.7-123.3,11.8-123.3,11.8l-4.3,0.2c-3.2,0.2-6.1-2.1-6.5-5.2c-0.5-3.4,2-6.6,5.6-6.9l108.7-10.3
		c12-1.3,21.5-12.5,20.2-25.1s-12.9-21.8-24.9-20.5l-96.7-1.2c-6.6-0.1-17.1-1.7-23.4-3.6c-62.3-18.2-97.5-1.2-116.2,6.8
		c-4.2-6.9-12.1-11.4-20.9-10.8l-41.7,2.8c-13.9,0.9-24.3,12.5-23.4,25.9l6.7,92.6c1,13.4,13,23.5,26.9,22.5l41.7-2.8
		c8.8-0.6,16-6,19.1-13.4l183.2,7.9c20.4,2.2,39.5-0.3,57.5-9.7l5.2-2.7l138.5-81c6.8-4,11.6-10.9,11.9-18.5
		C491.054,330.499,485.754,320.199,472.554,319.199z M48.954,438.099c-7.8,0-14.2-6.1-14.2-13.7s6.4-13.7,14.2-13.7
		s14.2,6.1,14.2,13.7S56.754,438.099,48.954,438.099z M369.554,351.099c0.2-2.5,0.2-5.1-0.1-7.7c-0.3-3.3-1.1-6.4-2.1-9.4
		c0.1-0.2,0.2-0.4,0.2-0.6c14.6-8,43.2-21.8,58.8-27.9c7.8-3.1,15.5-2.9,22.6,1.9c-5.6,2-10.8,4.5-15.7,6.9
		c-16.4,8.2-45.3,23.9-59.4,33.8C372.454,349.099,370.954,350.099,369.554,351.099z M411.354,296.199c-11.3,5-33,12.6-43.3,18.3
		l-7,3.8c-0.7,0.4-1.3,0.8-1.9,1.3c-3.1-3.7-6.8-6.8-10.9-9.3c9.6-5.1,31-12,40.7-15.8
		C396.754,291.399,404.254,291.599,411.354,296.199z M256.054,64.599c-29.7,0-53.7,24.1-53.7,53.7s24.1,53.7,53.7,53.7
		c29.7,0,53.7-24.1,53.7-53.7S285.754,64.599,256.054,64.599z M271.454,139.499c-2.3,2.8-5.4,4.8-9,5.7c-1.6,0.4-2.2,1.2-2.2,2.9
		c0.1,1.6,0,3.2,0,4.8c0,1.4-0.7,2.2-2.1,2.2c-1.7,0-3.4,0-5.1,0c-1.5,0-2.2-0.9-2.2-2.3c0-1.2,0-2.3,0-3.5c0-2.6-0.1-2.7-2.6-3.1
		c-3.1-0.5-6.2-1.2-9.1-2.6c-2.3-1.1-2.5-1.7-1.8-4c0.5-1.8,1-3.5,1.5-5.3c0.6-2,1.2-2.3,3-1.3c3.2,1.7,6.6,2.6,10.1,3
		c2.3,0.3,4.5,0.1,6.6-0.9c3.9-1.7,4.6-6.3,1.2-9.1c-1.1-0.9-2.4-1.6-3.8-2.2c-3.5-1.5-7.1-2.7-10.3-4.6c-5.3-3.2-8.7-7.5-8.3-14
		c0.4-7.3,4.6-11.9,11.3-14.3c2.8-1,2.8-1,2.8-3.9c0-1,0-2,0-2.9c0.1-2.2,0.4-2.5,2.6-2.6c0.7,0,1.3,0,2,0c4.6,0,4.6,0,4.6,4.6
		c0,3.3,0,3.3,3.3,3.8c2.5,0.4,4.9,1.1,7.2,2.1c1.3,0.6,1.8,1.4,1.4,2.8c-0.6,2-1.1,4-1.8,6c-0.6,1.9-1.2,2.1-3,1.3
		c-3.6-1.7-7.4-2.5-11.4-2.3c-1,0.1-2.1,0.2-3,0.6c-3.4,1.5-4,5.3-1.1,7.6c1.5,1.2,3.2,2,4.9,2.8c3,1.3,6.1,2.5,9,4.1
		C275.554,120.099,277.954,131.599,271.454,139.499z M349.154,118.299c0,8.2-6.7,14.9-14.9,14.9c-8.2,0-14.9-6.7-14.9-14.9
		s6.7-14.9,14.9-14.9C342.454,103.399,349.154,110.099,349.154,118.299z M192.854,118.299c0,8.2-6.7,14.9-14.9,14.9
		s-14.9-6.7-14.9-14.9s6.7-14.9,14.9-14.9C186.154,103.399,192.854,110.099,192.854,118.299z M373.054,30.699h-234
		c-13.5,0-24.5,11-24.5,24.5v126.2c0,13.5,11,24.5,24.5,24.5h234c13.5,0,24.5-11,24.5-24.5v-126.2
		C397.554,41.699,386.554,30.699,373.054,30.699z M376.654,157.899c-2-0.5-4-0.8-6.1-0.8c-13.7,0-24.8,11.1-24.8,24.8
		c0,1,0.1,2.1,0.2,3.1h-181.7c0.3-1.5,0.4-3,0.4-4.6c0-13.7-11.1-24.8-24.8-24.8c-1.5,0-2.9,0.1-4.4,0.4v-75.4
		c1.4,0.3,2.9,0.4,4.4,0.4c13.7,0,24.8-11.1,24.8-24.8c0-1.6-0.1-3.1-0.4-4.6h182.2c-0.5,1.9-0.8,4-0.8,6.1
		c0,13.7,11.1,24.8,24.8,24.8c2.1,0,4.2-0.3,6.1-0.8v76.2H376.654z M114.954,232.999c0-5.8,4.7-10.5,10.5-10.5h261.7
		c5.8,0,10.5,4.7,10.5,10.5s-4.7,10.5-10.5,10.5h-261.8C119.654,243.499,114.954,238.799,114.954,232.999z M114.954,270.999
		c0-5.8,4.7-10.5,10.5-10.5h261.7c5.8,0,10.5,4.7,10.5,10.5s-4.7,10.5-10.5,10.5h-261.8
		C119.654,281.499,114.954,276.799,114.954,270.999z"/>
</SvgIcon>;