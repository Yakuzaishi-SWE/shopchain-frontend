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
export const Launch = (props: IProps) => <SvgIcon {...props} ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></SvgIcon>;
export const MoneyOn = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" /></SvgIcon>;
export const MoneyOff = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13zM5.47 3.92L4.06 5.33 7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.83-.55 2.46-1.12l2.22 2.22 1.41-1.41L5.47 3.92z" /></SvgIcon>;
export const Lock = (props: IProps) => <SvgIcon {...props}><g fill="none"><path d="M0 0h24v24H0V0z" /><path d="M0 0h24v24H0V0z" opacity=".87" /></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></SvgIcon>;
export const Unlock = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></SvgIcon>;
export const Loading = (props: IProps) => <SvgIcon viewBox="0 0 100 100" width="150" height="150" {...props}>
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

export const CheckMark = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></SvgIcon>;
export const Cross = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></SvgIcon>;
export const Warning = (props: IProps) => <SvgIcon {...props}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" /></SvgIcon>;

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
    <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" />
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

export const PiggyBank = (props: IProps) => <SvgIcon {...props} height="40" width="48" viewBox="0 0 490.766 490.766">
    <path className="piggyStyle-1" d="M451.669,325.571h43.482c4.803,0,8.696-3.894,8.696-8.696v-69.571c0-4.803-3.894-8.696-8.696-8.696
	h-43.482V325.571z"/>
    <path className="piggyStyle-2" d="M303.83,429.928H173.384c-90.877,0-165.231-74.354-165.231-165.231l0,0
	c0-90.877,74.354-165.231,165.231-165.231H303.83c90.877,0,165.231,74.354,165.231,165.231l0,0
	C469.062,355.574,394.707,429.928,303.83,429.928z"/>
    <path className="piggyStyle-3" d="M303.83,56.349v69.205c0,9.606,7.787,17.393,17.393,17.393h43.482
	c0-59.121-34.734-87.242-51.728-93.208C308.493,48.165,303.83,51.598,303.83,56.349z"/>
    <path className="piggyStyle-4" d="M253.191,134.251c4.484-7.682,7.157-16.549,7.157-26.089c0-28.818-23.361-52.178-52.178-52.178
	s-52.178,23.361-52.178,52.178c0,9.54,2.673,18.407,7.157,26.089H253.191z"/>
    <path className="piggyStyle-5" d="M427.243,374.003c-19.323,7.971-40.425,12.442-62.538,12.442h-18.884
	c0.439-23.331-18.323-43.482-42.709-43.482l0,0c-23.617,0-42.762,19.145-42.762,42.762v0.72H234.26
	c-90.877,0-165.231-74.354-165.231-165.231l0,0c0-41.867,15.911-80.108,41.819-109.306C50.758,136.696,8.153,195.932,8.153,264.695
	l0,0c0,93.728,47.819,169.523,64.167,192.698c3.261,4.622,8.529,7.319,14.185,7.319h34.701c9.605,0,17.393-7.788,17.393-17.393
	v-21.178c11.232,2.433,22.853,3.785,34.786,3.785h86.964v17.393c0,9.605,7.788,17.393,17.393,17.393h38.117
	c8.201,0,15.288-5.73,17.007-13.748l5.294-24.702C373.21,418.733,404.2,399.973,427.243,374.003z"/>
    <circle className="piggyStyle-circle" cx="208.17" cy="108.161" r="26.089" />
    <path d="M260.348,352.204c-4.503,0-8.153,3.65-8.153,8.153v17.39c0,4.503,3.65,8.153,8.153,8.153c4.503,0,8.153-3.65,8.153-8.153
	v-17.39C268.501,355.854,264.851,352.204,260.348,352.204z"/>
    <path d="M507.064,235.387c-3.182-3.182-7.411-4.934-11.912-4.934c-0.001,0-0.002,0-0.003,0l-20.929,0.003
	c-0.265,0-0.447-0.298-0.503-0.574c-5.753-28.218-18.654-54.82-37.31-76.932c-18.032-21.372-41.127-38.18-66.88-48.737
	c-4.154-17.536-12.925-35.616-30.222-49.207c-16.746-13.158-33.612-15.69-34.321-15.792c-2.336-0.333-4.709,0.363-6.495,1.912
	c-1.786,1.549-2.811,3.795-2.811,6.159v44.025h-29.588c-7.311-25.09-30.5-43.482-57.919-43.482
	c-28.001,0-51.603,19.177-58.376,45.085c-40.312,5.491-77.4,25.021-104.92,55.386C15.937,180.233,0,221.569,0,264.696
	c0,96.801,50.255,175.564,65.659,197.397c4.758,6.745,12.551,10.773,20.846,10.773h34.701c14.086,0,25.546-11.46,25.546-25.546
	v-11.285c8.781,1.352,17.701,2.045,26.633,2.045h78.811v9.24c0,14.086,11.46,25.546,25.546,25.546h38.117
	c11.966,0,22.471-8.493,24.978-20.193l4.184-19.524c53.584-13.049,96.667-50.641,117.872-99.424h32.258
	c9.291,0,16.849-7.558,16.849-16.849v-69.572C512,242.801,510.248,238.57,507.064,235.387z M208.17,64.136
	c24.276,0,44.025,19.75,44.025,44.025c0,6.208-1.329,12.323-3.833,17.936h-80.385c-2.503-5.615-3.833-11.728-3.833-17.936
	C164.144,83.885,183.894,64.136,208.17,64.136z M495.694,316.874c0,0.3-0.243,0.544-0.544,0.544h-26.128
	c4.441-13.904,7.175-28.526,7.956-43.604c0.234-4.496-3.223-8.331-7.72-8.564c-4.497-0.228-8.331,3.223-8.564,7.72
	c-3.454,66.592-48.778,123.449-111.832,142.252l11.391-53.155c0.944-4.403-1.861-8.737-6.264-9.68
	c-4.4-0.946-8.737,1.861-9.68,6.264l-19.416,90.604c-0.907,4.232-4.707,7.304-9.034,7.304h-38.118c-5.095,0-9.24-4.145-9.24-9.24
	v-34.786c0-4.503-3.65-8.153-8.153-8.153c-4.503,0-8.153,3.65-8.153,8.153v9.24h-78.811c-8.945,0-17.874-0.769-26.633-2.262v-59.155
	c0-4.503-3.65-8.153-8.153-8.153c-4.503,0-8.153,3.65-8.153,8.153v86.964c0,5.095-4.145,9.24-9.24,9.24H86.505
	c-3.048,0-5.79-1.409-7.522-3.866c-14.703-20.843-62.677-95.997-62.677-187.999c0-39.072,14.437-76.52,40.651-105.445
	c23.99-26.473,55.999-43.853,90.907-49.561c0.141,5.587,1.057,11.111,2.701,16.407h-3.27c-4.503,0-8.153,3.65-8.153,8.153
	c0,4.503,3.65,8.153,8.153,8.153h121.749c4.503,0,8.153-3.65,8.153-8.153c0-4.503-3.65-8.153-8.153-8.153h-3.271
	c1.795-5.779,2.727-11.828,2.727-17.936c0-0.183-0.012-0.362-0.014-0.544h27.19v17.936c0,4.503,3.65,8.153,8.153,8.153
	s8.153-3.65,8.153-8.153V57.99c15.469,5.854,44.569,23.835,44.569,76.26c0,4.503,3.65,8.153,8.153,8.153
	c4.503,0,8.153-3.65,8.153-8.153c0-3.454-0.125-7.101-0.411-10.87c19.667,9.58,37.311,23.272,51.498,40.087
	c16.9,20.031,28.586,44.123,33.795,69.673c1.609,7.895,8.541,13.624,16.483,13.623l20.929-0.002c0.055,0,0.225,0,0.384,0.159
	c0.159,0.159,0.159,0.327,0.159,0.384V316.874z"/>
    <path d="M391.194,213.062c-14.873,0-28.267,9.121-33.329,22.698c-1.573,4.219,0.572,8.914,4.791,10.487
	c4.22,1.575,8.915-0.572,10.487-4.791c2.696-7.23,9.95-12.088,18.05-12.088s15.355,4.858,18.05,12.088
	c1.223,3.281,4.333,5.307,7.64,5.307c0.947,0,1.909-0.166,2.847-0.516c4.219-1.573,6.364-6.269,4.791-10.487
	C419.461,222.183,406.066,213.062,391.194,213.062z"/>
    <path d="M216.323,258.48v-41.664c15.994,1.944,27.176,9.354,27.176,16.085c0,4.503,3.65,8.153,8.153,8.153
	c4.503,0,8.153-3.65,8.153-8.153c0-16.668-18.534-30.069-43.482-32.49v-0.937c0-4.503-3.65-8.153-8.153-8.153
	c-4.503,0-8.153,3.65-8.153,8.153v0.937c-24.948,2.421-43.482,15.822-43.482,32.49c0,23.807,23.52,32.4,43.482,38.013v41.664
	c-15.994-1.944-27.176-9.354-27.176-16.085c0-4.503-3.65-8.153-8.153-8.153c-4.503,0-8.153,3.65-8.153,8.153
	c0,16.668,18.534,30.069,43.482,32.49v0.937c0,4.503,3.65,8.153,8.153,8.153c4.503,0,8.153-3.65,8.153-8.153v-0.937
	c24.948-2.421,43.482-15.822,43.482-32.49C259.805,272.684,236.284,264.093,216.323,258.48z M172.841,232.9
	c0-6.731,11.182-14.141,27.176-16.085v37.028C179.937,247.544,172.841,241.82,172.841,232.9z M216.323,312.578v-37.028
	c20.08,6.298,27.176,12.023,27.176,20.943C243.499,303.224,232.316,310.634,216.323,312.578z"/>
</SvgIcon>;

export const SingleOrder = (props: IProps) => <SvgIcon {...props} height="33" width="48" viewBox="0 0 490.766 490.766" fill="white">
    <path d="M332.64,64.58C313.18,43.57,286,32,256,32c-30.16,0-57.43,11.5-76.8,32.38-19.58,21.11-29.12,49.8-26.88,80.78C156.76,206.28,203.27,256,256,256s99.16-49.71,103.67-110.82C361.94,114.48,352.34,85.85,332.64,64.58Z" /><path d="M432,480H80A31,31,0,0,1,55.8,468.87c-6.5-7.77-9.12-18.38-7.18-29.11C57.06,392.94,83.4,353.61,124.8,326c36.78-24.51,83.37-38,131.2-38s94.42,13.5,131.2,38c41.4,27.6,67.74,66.93,76.18,113.75,1.94,10.73-.68,21.34-7.18,29.11A31,31,0,0,1,432,480Z" />
</SvgIcon>;

export const ShoppingCartIcon = (props: IProps) => <SvgIcon {...props} height="40" width="40">
    <path d="M7 22Q6.175 22 5.588 21.413Q5 20.825 5 20Q5 19.175 5.588 18.587Q6.175 18 7 18Q7.825 18 8.412 18.587Q9 19.175 9 20Q9 20.825 8.412 21.413Q7.825 22 7 22ZM17 22Q16.175 22 15.588 21.413Q15 20.825 15 20Q15 19.175 15.588 18.587Q16.175 18 17 18Q17.825 18 18.413 18.587Q19 19.175 19 20Q19 20.825 18.413 21.413Q17.825 22 17 22ZM6.15 6 8.55 11H15.55Q15.55 11 15.55 11Q15.55 11 15.55 11L18.3 6Q18.3 6 18.3 6Q18.3 6 18.3 6ZM5.2 4H19.95Q20.625 4 20.875 4.5Q21.125 5 20.85 5.55L17.3 11.95Q17.025 12.45 16.575 12.725Q16.125 13 15.55 13H8.1L7 15Q7 15 7 15Q7 15 7 15H19V17H7Q5.875 17 5.3 16.012Q4.725 15.025 5.25 14.05L6.6 11.6L3 4H1V2H4.25ZM8.55 11 6.15 6H18.3Q18.3 6 18.3 6Q18.3 6 18.3 6L15.55 11Z" />
</SvgIcon>;

export const PaidFillIcon = (props: IProps) => <SvgIcon {...props} height="40" width="40">
    <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM11.1 19H12.85V17.75Q14.1 17.525 15 16.775Q15.9 16.025 15.9 14.55Q15.9 13.5 15.3 12.625Q14.7 11.75 12.9 11.1Q11.4 10.6 10.825 10.225Q10.25 9.85 10.25 9.2Q10.25 8.55 10.713 8.175Q11.175 7.8 12.05 7.8Q12.85 7.8 13.3 8.188Q13.75 8.575 13.95 9.15L15.55 8.5Q15.275 7.625 14.538 6.975Q13.8 6.325 12.9 6.25V5H11.15V6.25Q9.9 6.525 9.2 7.35Q8.5 8.175 8.5 9.2Q8.5 10.375 9.188 11.1Q9.875 11.825 11.35 12.35Q12.925 12.925 13.538 13.375Q14.15 13.825 14.15 14.55Q14.15 15.375 13.562 15.762Q12.975 16.15 12.15 16.15Q11.325 16.15 10.688 15.637Q10.05 15.125 9.75 14.1L8.1 14.75Q8.45 15.95 9.188 16.688Q9.925 17.425 11.1 17.7Z" />
</SvgIcon>;

export const WalletIcon = (props: IProps) => <SvgIcon {...props} height="40" width="40">
    <path d="M16 13.5Q16.65 13.5 17.075 13.075Q17.5 12.65 17.5 12Q17.5 11.35 17.075 10.925Q16.65 10.5 16 10.5Q15.35 10.5 14.925 10.925Q14.5 11.35 14.5 12Q14.5 12.65 14.925 13.075Q15.35 13.5 16 13.5ZM13 17Q12.175 17 11.588 16.413Q11 15.825 11 15V9Q11 8.175 11.588 7.587Q12.175 7 13 7H20Q20.825 7 21.413 7.587Q22 8.175 22 9V15Q22 15.825 21.413 16.413Q20.825 17 20 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5H13Q11.225 5 10.113 6.112Q9 7.225 9 9V15Q9 16.775 10.113 17.887Q11.225 19 13 19H21Q21 19.825 20.413 20.413Q19.825 21 19 21Z" />
</SvgIcon>;

export const BackArrowIcon = (props: IProps) => <SvgIcon {...props} height="24" width="24">
    <path d="M12 20 4 12 12 4 13.425 5.4 7.825 11H20V13H7.825L13.425 18.6Z" />
</SvgIcon>;

export const HomeIcon = (props: IProps) => <SvgIcon {...props} height="24" width="24">
    <path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" />
</SvgIcon>;