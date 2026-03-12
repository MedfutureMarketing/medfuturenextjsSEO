"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { JSX, useEffect, useState } from "react";
import { createPortal } from "react-dom";

// ── Asset Imports ──────────────────────────────────────────────────────────────
import gpHubImage from "@/assets/icons/medfuturecover.webp";
import permanentHubImage from "@/assets/icons/medfuturecover.webp";
import locumHubImage from "@/assets/icons/medfuturecover.webp";
import alliedHubImage from "@/assets/icons/medfuturecover.webp";
import mentalHubImage from "@/assets/icons/medfuturecover.webp";
import oralHubImage from "@/assets/icons/medfuturecover.webp";
import candidatesHubImage from "@/assets/icons/medfuturecover.webp";
// ──────────────────────────────────────────────────────────────────────────────

type MenuKey = "permanent" | "candidates" | "locum" | "medical" | "allied" | "mental" | "oral" | "Explore";

interface MenuLink {
  label: string;
  href: string;
  icon?: string;
  description?: string;
}

interface HubSection {
  title: string;
  titleHref?: string;
  image: StaticImageData;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

interface MenuConfig {
  title: string;
  titleHref?: string;
  hub?: HubSection;
  professionsHeading?: string;
  columns: {
    heading: string;
    links: MenuLink[];
  }[];
  explore?: {
    heading: string;
    links: { label: string; href: string }[];
  };
}

// SVG icon components matching the screenshot style
const icons: Record<string, JSX.Element> = {
  stethoscope: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  ),
  user: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),

  fracgp: (

    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2222 4.72222C13.2222 7.33031 11.1081 9.44444 8.5 9.44444C5.89192 9.44444 3.77778 7.33031 3.77778 4.72222C3.77778 2.11414 5.89192 0 8.5 0C11.1081 0 13.2222 2.11414 13.2222 4.72222ZM12.2778 4.72222C12.2778 5.72415 11.8798 6.68504 11.1713 7.39351C10.4628 8.10198 9.50193 8.5 8.5 8.5C7.49807 8.5 6.53718 8.10198 5.82871 7.39351C5.12024 6.68504 4.72222 5.72415 4.72222 4.72222C4.72222 3.72029 5.12024 2.7594 5.82871 2.05093C6.53718 1.34246 7.49807 0.944444 8.5 0.944444C9.50193 0.944444 10.4628 1.34246 11.1713 2.05093C11.8798 2.7594 12.2778 3.72029 12.2778 4.72222ZM5.62606 10.7926L5.63125 10.803L5.66667 10.8724H11.2148C11.3229 10.6675 11.568 10.3407 11.8056 10.395C12.3392 10.5164 12.8766 10.6854 13.3927 10.8937L13.4083 10.8861L13.4135 10.8965L13.4172 10.9036C15.3604 11.6932 17 13.0314 17 14.4358V17H0V14.4358C0 12.6532 2.64256 10.9759 5.19444 10.395C5.40269 10.3478 5.52642 10.5934 5.62606 10.7926ZM12.6102 11.6086C12.4077 11.5376 12.2028 11.4735 11.9959 11.4164L11.7852 11.8169H5.09669L4.90119 11.4452L4.73119 11.4962C4.72773 11.5271 4.72521 11.5624 4.72364 11.602C4.7175 11.7649 4.72978 11.9581 4.75669 12.1545C4.78414 12.3594 4.82836 12.5618 4.88892 12.7594C5.22064 12.7987 5.5278 12.954 5.75616 13.1978C5.98452 13.4416 6.11939 13.7582 6.13695 14.0918C6.15451 14.4254 6.05363 14.7544 5.85212 15.0209C5.65061 15.2873 5.36145 15.4739 5.03569 15.5478C4.70992 15.6217 4.36852 15.5782 4.07178 15.4248C3.77503 15.2714 3.54202 15.0181 3.41391 14.7096C3.28579 14.4011 3.27081 14.0573 3.37161 13.7388C3.4724 13.4203 3.6825 13.1477 3.96478 12.9691L3.961 12.9559C3.89794 12.7351 3.85107 12.5101 3.82075 12.2825C3.80073 12.1371 3.78749 11.9909 3.78108 11.8443C3.19742 12.0936 2.65294 12.3949 2.19678 12.7273C1.28917 13.3903 0.944444 14.0099 0.944444 14.4358V16.0556H16.0556V14.4358C16.0556 14.0094 15.7108 13.3899 14.8032 12.7278C14.4074 12.4433 13.9859 12.1964 13.5443 11.9902C13.525 12.2461 13.4858 12.5001 13.4272 12.75H13.6944C13.7821 12.75 13.868 12.7745 13.9426 12.8206C14.0172 12.8667 14.0774 12.9327 14.1166 13.0111L14.5888 13.9556C14.6219 14.0212 14.6389 14.0935 14.6389 14.1667V15.1111C14.6389 15.2364 14.5891 15.3565 14.5006 15.445C14.412 15.5336 14.2919 15.5833 14.1667 15.5833H13.2222V14.6389H13.6944V14.2781L13.4026 13.6944H12.0974L11.8056 14.2781V14.6389H12.2778V15.5833H11.3333C11.2081 15.5833 11.088 15.5336 10.9994 15.445C10.9109 15.3565 10.8611 15.2364 10.8611 15.1111V14.1667C10.8611 14.0935 10.8781 14.0212 10.9112 13.9556L11.3834 13.0111C11.4226 12.9327 11.4828 12.8667 11.5574 12.8206C11.632 12.7745 11.7179 12.75 11.8056 12.75H12.4487L12.4662 12.6914C12.5106 12.5399 12.5502 12.3514 12.5772 12.155C12.6036 11.9604 12.6159 11.7701 12.6102 11.6086ZM5.19444 14.1667C5.19444 14.4377 4.97628 14.646 4.72222 14.646C4.46817 14.646 4.25 14.4382 4.25 14.1667C4.25 13.8956 4.46817 13.6874 4.72222 13.6874C4.97628 13.6874 5.19444 13.8951 5.19444 14.1667Z" fill="#074CA4" />
    </svg>

  ),

  clock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  globe: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  heart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  building: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h1v1H9z" /><path d="M14 9h1v1h-1z" />
      <path d="M9 14h1v1H9z" /><path d="M14 14h1v1h-1z" />
      <path d="M9 19v-4h6v4" />
    </svg>
  ),
  speech: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.88794 17.0336C14.7672 17.0336 18.7231 13.4068 18.7231 9.28407C18.7231 5.16134 14.7672 2.10547 9.88794 2.10547C5.0087 2.10547 1.05273 5.44738 1.05273 9.57011C1.05273 11.1792 1.65574 12.6702 2.68172 13.8883L1.60493 18.9476L5.92977 16.2451C7.18298 16.7705 8.52904 17.0387 9.88794 17.0336Z" stroke="#074CA4" stroke-width="1.1044" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  ),

  Occupation: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7941 1.05273L13.3681 1.51963C12.4142 2.56966 11.6278 3.03916 10.9733 3.34631C10.3187 3.65281 9.76869 3.74437 9.22841 4.15802C8.65242 4.59959 7.81538 5.44637 7.46277 6.95811C6.70691 7.12305 6.15364 7.41267 5.71727 7.78995C5.28608 8.16269 4.9614 8.58673 4.56139 9.04843C4.55814 9.05362 4.56333 9.06336 4.56139 9.06856C3.98734 9.72832 3.48538 10.4387 2.51133 10.8141L2.10547 10.9764V17.9162H14.4844C15.1942 17.8779 15.6864 17.3863 15.9858 16.9013C16.2845 16.4168 16.4501 15.8921 16.5338 15.461C16.7494 14.3622 17.1423 11.1991 17.1423 11.1991L17.1631 11.1388V11.0777C17.1423 10.6387 16.9618 10.266 16.7364 9.92053L17.467 7.74969L18.6241 6.00418L18.9488 5.53728L18.5222 5.15221L14.261 1.45859L13.7941 1.05273ZM13.835 2.8385L17.2235 5.78145L16.3306 7.09967L16.2702 7.16136L16.2494 7.26266L15.6611 9.00752C15.3539 8.88089 15.0377 8.79193 14.687 8.80491H14.6461L10.5473 8.82505H9.89791V11.3414C9.807 12.0492 9.41348 12.3232 8.92386 12.5187C8.76151 12.5842 8.74138 12.5485 8.59917 12.5791V8.80556C8.49267 6.39835 9.34984 5.70547 10.02 5.19312C10.2051 5.05091 10.7473 4.88662 11.5213 4.52362C12.1681 4.21906 12.972 3.67294 13.835 2.8385ZM7.34134 8.41919C7.33874 8.5666 7.29264 8.6705 7.30043 8.82505V14.02H7.9498C7.9498 14.02 8.64463 14.0122 9.39075 13.7155C10.1362 13.4187 11.0369 12.7239 11.1967 11.5037V10.1238L14.687 10.1037H14.7071C14.9922 10.088 15.2718 10.186 15.4848 10.3761C15.6978 10.5662 15.8268 10.833 15.8435 11.118C15.8409 11.1284 15.8111 11.3693 15.8033 11.4225H13.1448V12.7213H15.6409C15.5721 13.2232 15.5091 13.5382 15.4377 14.02H13.1448V15.3187H15.2351C15.1583 15.6329 15.0351 15.9339 14.8695 16.2116C14.6922 16.5006 14.5396 16.6097 14.4032 16.6175H3.40421V11.7673C4.45684 11.2089 5.1114 10.4056 5.53479 9.92118C5.97377 9.41857 6.27507 9.03804 6.56989 8.78478C6.76275 8.61984 7.06471 8.52569 7.34134 8.41919Z" fill="#074CA4" />
    </svg>
  ),

  Physio: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6731 4.41843C13.259 4.41843 13.8209 4.18567 14.2352 3.77136C14.6495 3.35706 14.8823 2.79513 14.8823 2.20921C14.8823 1.62329 14.6495 1.06137 14.2352 0.647064C13.8209 0.232756 13.259 0 12.6731 0C12.0872 0 11.5252 0.232756 11.1109 0.647064C10.6966 1.06137 10.4639 1.62329 10.4639 2.20921C10.4639 2.79513 10.6966 3.35706 11.1109 3.77136C11.5252 4.18567 12.0872 4.41843 12.6731 4.41843ZM8.23502 6.52062C7.62283 6.67281 7.20504 6.90158 6.86777 7.18535C6.3621 7.61148 5.95364 8.22613 5.40183 9.1923C5.2726 9.4184 5.05885 9.5839 4.80759 9.6524C4.55634 9.7209 4.28816 9.68678 4.06206 9.55755C3.83596 9.42832 3.67046 9.21457 3.60196 8.96332C3.53346 8.71206 3.56758 8.44389 3.69681 8.21779C4.24616 7.25702 4.80141 6.35812 5.60311 5.68357C6.43967 4.97859 7.46376 4.57995 8.84477 4.42628C9.42211 4.36246 10.0574 4.37523 10.6529 4.64082C11.2778 4.92017 11.7344 5.42043 12.0457 6.08908C12.4649 6.98897 12.7767 7.52458 13.0261 7.83535C13.1464 7.9841 13.2303 8.05332 13.2779 8.08425C13.3157 8.1088 13.3319 8.11076 13.3378 8.11174C13.3805 8.11665 13.5195 8.11174 13.926 7.93157C14.1032 7.85302 14.2966 7.75876 14.5332 7.64339L14.5897 7.6159C14.8791 7.47312 15.1711 7.33563 15.4655 7.20351C15.7032 7.09915 15.9726 7.09319 16.2147 7.18692C16.4568 7.28065 16.652 7.46645 16.7574 7.70367C16.8629 7.9409 16.8701 8.21024 16.7775 8.45277C16.6849 8.69531 16.5 8.89131 16.2633 8.99788C15.9904 9.12031 15.7199 9.24781 15.4518 9.38032L15.3875 9.41174C15.1612 9.5222 14.9334 9.63365 14.7198 9.72791C14.278 9.9233 13.7134 10.1354 13.1012 10.0613C12.4551 9.9827 11.9573 9.61794 11.5474 9.12847L10.2056 11.7172L12.0614 14.1316C12.1718 14.2759 12.2401 14.4478 12.2592 14.6284L12.6677 18.554C12.6833 18.6833 12.6729 18.8144 12.6373 18.9397C12.6017 19.065 12.5415 19.182 12.4602 19.2838C12.3789 19.3856 12.2782 19.4702 12.1639 19.5327C12.0496 19.5952 11.9241 19.6344 11.7945 19.6479C11.6649 19.6613 11.534 19.6489 11.4092 19.6113C11.2845 19.5737 11.1685 19.5116 11.0681 19.4287C10.9676 19.3458 10.8846 19.2437 10.8239 19.1285C10.7633 19.0132 10.7261 18.887 10.7147 18.7572L10.3348 15.1081L9.20757 13.6412L9.19775 13.6593L9.15651 13.5749L7.07396 10.8649C6.97158 10.7317 6.9051 10.5745 6.88086 10.4082C6.85662 10.242 6.87544 10.0723 6.93551 9.91544L8.23502 6.52062Z" fill="#074CA4" />
      <path d="M6.74822 12.2778L6.02556 14.2219L3.17813 13.9961C3.04867 13.9841 2.91811 13.9979 2.79404 14.0367C2.66996 14.0756 2.55483 14.1387 2.45532 14.2224C2.35582 14.306 2.27394 14.4087 2.21441 14.5243C2.15489 14.6398 2.11891 14.7661 2.10858 14.8957C2.09824 15.0253 2.11375 15.1557 2.1542 15.2792C2.19464 15.4028 2.25923 15.5171 2.34421 15.6155C2.42918 15.7139 2.53286 15.7945 2.64921 15.8525C2.76557 15.9105 2.89229 15.9448 3.02201 15.9535L6.60978 16.2382C6.8227 16.2552 7.03535 16.2022 7.21546 16.0874C7.39558 15.9726 7.53334 15.8021 7.60785 15.602L8.16016 14.1154L6.74822 12.2778Z" fill="#074CA4" />
    </svg>
  ),
  Podia: (

    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.522 8.59908V2.10547H18.6231V8.59908C18.6231 9.62858 18.9793 10.646 19.4219 11.6959C19.7319 12.4314 20 13.3282 20 14.2173C19.9994 15.5105 19.4192 16.3672 18.6534 16.8775C17.9179 17.3675 17.0447 17.5206 16.4209 17.5206C15.6684 17.5206 15.1729 17.3598 14.7539 17.1544C14.6245 17.0911 14.4913 17.0168 14.3746 16.9524C14.3232 16.9238 14.2757 16.8977 14.232 16.8742C14.0846 16.791 13.9298 16.7215 13.7696 16.6667C13.6187 16.616 13.2922 16.5808 12.8358 16.5736C12.402 16.567 11.9164 16.5857 11.4903 16.6105C11.024 16.6375 10.61 16.8032 10.103 17.0069C9.94881 17.0693 9.78365 17.1339 9.60748 17.2007C9.08447 17.3967 8.38913 17.5206 7.33705 17.5206C6.24534 17.5206 5.72398 17.4578 5.36557 17.3042C5.24476 17.25 5.12952 17.1842 5.02149 17.1077C4.98849 17.0853 4.9549 17.0638 4.92074 17.0432C4.76223 17.1512 4.58806 17.2342 4.40433 17.2893C3.95289 17.4303 3.21572 17.5206 1.83167 17.5206C1.3593 17.5206 0.954106 17.4071 0.638097 17.1682C0.320987 16.9276 0.148118 16.6023 0.0666379 16.2802C-0.0902657 15.6663 0.0589303 14.9914 0.215283 14.5746C0.254612 14.4697 0.325017 14.3793 0.417095 14.3154C0.509174 14.2516 0.618541 14.2174 0.730588 14.2173H2.74005L3.08524 13.941C3.72662 13.4279 4.45608 13.0689 5.19546 12.8046C6.14954 12.4633 7.35797 11.9403 8.45355 11.245C9.5238 10.5656 10.4355 9.753 10.9282 8.8292L11.4688 3.15425L12.5644 3.25885L12.0139 9.03951C12.0076 9.10694 11.9889 9.17264 11.9588 9.2333C11.3488 10.4527 10.2202 11.4277 9.04373 12.1748C7.85842 12.9274 6.5696 13.4824 5.56597 13.8413C4.90532 14.078 4.29313 14.3847 3.77287 14.8003L3.42768 15.0773C3.23233 15.2335 2.98963 15.3185 2.7395 15.3184H1.14404C1.09559 15.5573 1.08238 15.8095 1.13303 16.0082C1.16827 16.1448 1.22662 16.2323 1.3026 16.2901C1.38077 16.3496 1.53382 16.4195 1.83167 16.4195C3.20031 16.4195 3.79379 16.3259 4.07621 16.2378C4.20063 16.1993 4.25899 16.1624 4.30303 16.1321L4.32065 16.1189C4.368 16.0825 4.49572 15.9857 4.61354 15.9273C4.74401 15.8619 4.8951 15.851 5.0336 15.897C5.29235 15.9835 5.45476 16.0748 5.58634 16.1607L5.67883 16.2218C5.73444 16.2593 5.75481 16.273 5.79885 16.2918C5.92217 16.3446 6.22662 16.4195 7.33705 16.4195C8.3071 16.4195 8.8604 16.3044 9.221 16.1695C9.33937 16.1255 9.46489 16.0743 9.59647 16.0209C10.1283 15.8062 10.762 15.5496 11.4265 15.5111C11.9013 15.4816 12.3771 15.4687 12.8529 15.4726C13.3021 15.4797 13.7866 15.5111 14.1175 15.6217C14.3669 15.7049 14.5733 15.8073 14.7545 15.9047L14.9427 16.0082C15.0446 16.0649 15.1338 16.1145 15.2389 16.1662C15.5219 16.305 15.8522 16.4195 16.4209 16.4195C16.8983 16.4195 17.5385 16.2973 18.0423 15.9614C18.5157 15.646 18.8984 15.1257 18.8984 14.2173C18.8984 13.5325 18.6875 12.7892 18.4073 12.1236C17.9586 11.0589 17.522 9.86531 17.522 8.59908Z" fill="#074CA4" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5954 9.26416C15.7414 9.26416 15.8814 9.32216 15.9847 9.42541C16.0879 9.52865 16.1459 9.66869 16.1459 9.8147V9.82681L16.1454 9.84883C16.1454 9.86608 16.1443 9.88939 16.1421 9.91875C16.1185 10.2586 16.0525 10.5941 15.9455 10.9174C15.7473 11.5142 15.3377 12.2629 14.502 12.7645C14.3767 12.8396 14.2267 12.8619 14.085 12.8264C13.9433 12.791 13.8215 12.7007 13.7464 12.5754C13.6713 12.4501 13.649 12.3001 13.6844 12.1584C13.7199 12.0167 13.8102 11.8949 13.9355 11.8198C14.4767 11.4955 14.7558 11.0055 14.9011 10.57C14.9776 10.3387 15.0253 10.0989 15.0432 9.85599L15.0448 9.81855V9.81195C15.0456 9.66641 15.1039 9.52709 15.2071 9.42443C15.3102 9.32178 15.4498 9.26416 15.5954 9.26416Z" fill="white" />
    </svg>

  ),

  Psysio: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.1846 0.373047C12.4176 0.373221 13.4307 1.27021 13.6855 2.45508L13.7383 2.69922L13.9844 2.74316C15.5634 3.02619 16.7763 4.33628 16.7764 5.96484C16.7764 6.1206 16.7596 6.2611 16.7344 6.41699L16.71 6.56348L16.7939 6.68652C17.2403 7.34394 17.5215 8.10517 17.5215 8.94727C17.5215 10.1763 16.9039 11.2262 15.999 11.9951L15.8223 12.1455L15.8789 12.3701C15.8969 12.4419 15.9164 12.5111 15.9346 12.5732C15.9534 12.6375 15.9707 12.6938 15.9854 12.75C16.0131 12.8563 16.028 12.9473 16.0293 13.0371C16.0272 13.0462 16.0229 13.0633 16.0195 13.0801C16.0154 13.1007 16.011 13.1304 16.0088 13.1641L16.0068 13.1875L16.0088 13.2109C16.0095 13.2225 16.0114 13.2338 16.0127 13.2441L16.0088 13.2959C15.8787 14.8203 14.6003 16.0303 13.0479 16.0303H12.7754L12.6709 16.2324C12.2769 16.9955 11.6326 17.5205 10.8115 17.5205C10.5138 17.5197 10.2194 17.4603 9.94531 17.3438C9.67101 17.2271 9.42212 17.057 9.21484 16.8428L8.94727 16.5664L8.67969 16.8428C8.47254 17.0568 8.22429 17.2271 7.9502 17.3438C7.67589 17.4604 7.3801 17.5198 7.08203 17.5205C6.26219 17.52 5.61763 16.9948 5.22461 16.2324L5.12109 16.0303H4.84668C3.20867 16.0303 1.86426 14.6859 1.86426 13.0479C1.8643 12.8059 1.90542 12.5748 1.96875 12.3242L2.02539 12.1016L1.85254 11.9512C0.972626 11.1857 0.373047 10.1541 0.373047 8.94727C0.37307 8.10433 0.654485 7.34318 1.10059 6.6875L1.18457 6.56543L1.16016 6.41895C1.13481 6.26193 1.11816 6.12006 1.11816 5.96484C1.1182 4.33615 2.33156 3.02574 3.91016 2.74414L4.15625 2.7002L4.20898 2.45508C4.46401 1.26885 5.47781 0.373047 6.71094 0.373047C7.48558 0.373175 8.18145 0.734466 8.66602 1.29297L8.94727 1.61719L9.22949 1.29297C9.71395 0.733928 10.4096 0.373047 11.1846 0.373047ZM6.71094 1.11816C5.6722 1.11816 4.8467 1.94369 4.84668 2.98242V3.35547H4.47363C3.0241 3.3555 1.86429 4.51531 1.86426 5.96484V5.97461C1.86918 6.16317 1.89538 6.35057 1.94238 6.5332L1.97754 6.72266L1.85742 6.86719L1.85449 6.87109C1.37761 7.45713 1.11736 8.18982 1.11816 8.94531C1.11285 9.76693 1.41206 10.5617 1.95801 11.1758L2.25 11.5029L2.52637 11.1631C2.88184 10.7251 3.35437 10.402 3.88477 10.2256L4.03906 10.9688C3.81456 11.0545 3.60444 11.1768 3.41797 11.3311C3.13909 11.5618 2.92216 11.8579 2.78418 12.1924L2.77441 12.21L2.75098 12.2627C2.6546 12.5145 2.60963 12.7747 2.60938 13.0459C2.60776 13.3687 2.67654 13.6888 2.81055 13.9824C2.94455 14.276 3.14093 14.5368 3.38574 14.7471C3.63055 14.9573 3.91809 15.1121 4.22852 15.2002C4.53906 15.2883 4.86572 15.3082 5.18457 15.2578L5.18555 15.2568L5.55078 15.1973L5.62207 15.5654V15.5645C5.68281 15.9063 5.86261 16.2156 6.12988 16.4375C6.39752 16.6596 6.73535 16.7789 7.08301 16.7754V16.7764L7.08496 16.7754H7.08789C7.91793 16.773 8.57418 16.1158 8.57422 15.2852V6.67969L7.97559 7.13672C7.50339 7.49704 6.94729 7.7344 6.33789 7.80469V7.05371C7.60822 6.87446 8.57422 5.79631 8.57422 4.47363V2.98242C8.5742 1.94383 7.74948 1.11838 6.71094 1.11816ZM11.1846 1.11816C10.1458 1.11816 9.32033 1.94369 9.32031 2.98242V4.47363C9.32031 5.79624 10.2864 6.87437 11.5566 7.05371V7.80371C10.9635 7.73434 10.3975 7.50743 9.92188 7.13867L9.32031 6.67188V15.2852C9.32035 16.1154 9.97619 16.7724 10.8057 16.7754V16.7764L10.8086 16.7754L10.8115 16.7764V16.7754C11.1591 16.779 11.497 16.6604 11.7646 16.4385C12.0337 16.2154 12.2136 15.9029 12.2734 15.5586L12.3428 15.1973L12.709 15.2568L12.7119 15.2578C12.863 15.2811 12.9641 15.2851 13.0479 15.2852C14.2473 15.2852 15.1887 14.3595 15.2617 13.1875L15.2637 13.1543L15.2598 13.1211C15.1566 12.2457 14.4308 11.5568 13.5146 11.5566C13.2283 11.5556 12.9485 11.6268 12.6992 11.7598L12.2148 11.1807C12.5933 10.9454 13.0347 10.8115 13.5146 10.8115C14.1381 10.8116 14.7024 11.0626 15.1543 11.4629L15.4004 11.6816L15.6475 11.4648C16.3038 10.889 16.7219 10.0619 16.7715 9.13379L16.7764 8.94727C16.7776 8.19108 16.5173 7.45763 16.04 6.87109L16.0381 6.86816L15.916 6.72266L15.9512 6.53809C15.9924 6.35946 16.0303 6.17006 16.0303 5.96484C16.0302 4.5153 14.8705 3.35547 13.4209 3.35547H13.0479V2.98242C13.0478 1.94381 12.2231 1.11835 11.1846 1.11816Z" stroke="#074CA4" stroke-width="0.745614" />
    </svg>
  ),

  map: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  ),
  briefcase: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
};

const MEGA_MENU_CONFIG: Record<MenuKey, MenuConfig> = {
  Explore: {
    title: "Explore",
    titleHref: "/permanent",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Medical Jobs in New Zealand",
            href: "https://medfuture.co.nz/",
            icon: "globe",
            description: "Medfuture New Zealand connects healthcare professionals with opportunities across New Zealand, offering guidance, recruitment, and career support.",
          },
          {
            label: "Blogs",
            href: "https://themedfuture.com/blog",
            icon: "briefcase",
            description: "Stay updated with our latest insights, news, and expert articles. Discover tips, trends, and stories that keep you informed.",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Medfuture Global",
            href: "https://themedfuture.com/blog",
            icon: "globe",
            description: "Explore how Medfuture Global connects healthcare talent with the right opportunities worldwide.",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Visa & Immigration Services",
            href: "https://intuit7.com/",
            icon: "map",
            description: "Get expert guidance on visa applications, immigration processes, and residency options. We simplify complex procedures.",
          },
        ],
      },
    ],
  },

  permanent: {
    title: "Permanent Jobs",
    titleHref: "/permanent",
    hub: {
      title: "Permanent Jobs ",
      titleHref: "/permanent",
      image: permanentHubImage,
      description: "Access permanent roles, market insights, and career support tailored to your clinical focus.",
      buttonLabel: "Explore Permanent Jobs",
      buttonHref: "/permanent?page=1",
    },
    professionsHeading: "Browse by State",
    columns: [
      {
        heading: "",
        links: [
          { label: "New South Wales (NSW)", href: "/permanent/jobs/in-new-south-wales?page=1", icon: "map", description: "Explore Permanent Job Openings in New South Wales (NSW)" },
          { label: "Australian Capital Territory (ACT)", href: "/permanent/jobs/in-australian-capital-territory?page=1", icon: "map", description: "Explore Permanent Job Openings in ACT" },
          { label: "South Australia (SA)", href: "/permanent/jobs/in-south-australia?page=1", icon: "map", description: "Explore Permanent Job Openings in South Australia" },
          { label: "Northern Territory (NT)", href: "/permanent/jobs/in-northern-territory?page=1", icon: "map", description: "Explore Permanent Job Openings in Northern Territory" },
        ],
      },
      {
        heading: "",
        links: [
          { label: "Queensland (QLD)", href: "/permanent/jobs/in-queensland?page=1", icon: "map", description: "Explore Permanent Job Openings in Queensland (QLD)" },
          { label: "Western Australia (WA)", href: "/permanent/jobs/in-western-australia?page=1", icon: "map", description: "Explore Permanent Job Openings in Western Australia" },
          { label: "Victoria (VIC)", href: "/permanent/jobs/in-victoria?page=1", icon: "map", description: "Explore Permanent Job Openings in Victoria (VIC)" },
          { label: "Tasmania (TAS)", href: "/permanent/jobs/in-tasmania?page=1", icon: "map", description: "Explore Permanent Job Openings in Tasmania (TAS)" },
        ],
      },
    ],
    explore: {
      heading: "Browse Jobs by Key Cities",
      links: [
        { label: "Sydney, New South Wales", href: "/permanent/jobs/in-western-sydney?page=1" },
        { label: "Melbourne, Victoria", href: "/permanent/jobs/in-south-eastern-melbourne?page=1" },
        { label: "Brisbane, Queensland", href: "/permanent/jobs/in-brisbane-south?page=1" },
        { label: "Perth, Western Australia", href: "/permanent/jobs/in-south-perth?page=1" },
        { label: "Adelaide, South Australia", href: "/permanent/jobs/in-adelaide?page=1" },
        { label: "Gold Coast, Queensland", href: "/permanent/jobs/in-gold-coast?page=1" },
        { label: "Canberra, Australian Capital Territory", href: "/permanent/jobs/in-canberra?page=1" },
        { label: "Hobart, Tasmania", href: "/permanent/jobs/in-hobart?page=1" },
        { label: "Wollongong, New South Wales", href: "/permanent/jobs/in-south-western-sydney?page=1" },
        { label: "Geelong, Victoria", href: "/permanent/jobs/in-geelong?page=1" },
      ],
    },
  },

  locum: {
    title: "Locum Jobs",
    titleHref: "/locum",
    hub: {
      title: "Locum Jobs Hub",
      titleHref: "/locum",
      image: locumHubImage,
      description: "Discover flexible locum roles with competitive pay across Australia. Find short-term and ongoing placements.",
      buttonLabel: "Explore Locum Jobs",
      buttonHref: "/locum",
    },
    professionsHeading: "Browse by State",
    columns: [
      {
        heading: "",
        links: [
          { label: "New South Wales (NSW)", href: "/locum/jobs/in-new-south-wales?page=1", icon: "map", description: "Explore Locum Job Openings in New South Wales (NSW)" },
          { label: "Australian Capital Territory (ACT)", href: "/locum/jobs/in-australian-capital-territory?page=1", icon: "map", description: "Explore Locum Job Openings in ACT" },
          { label: "South Australia (SA)", href: "/locum/jobs/in-south-australia?page=1", icon: "map", description: "Explore Locum Job Openings in South Australia" },
          { label: "Northern Territory (NT)", href: "/locum/jobs/in-northern-territory?page=1", icon: "map", description: "Explore Locum Job Openings in Northern Territory" },
        ],
      },
      {
        heading: "",
        links: [
          { label: "Queensland (QLD)", href: "/locum/jobs/in-queensland?page=1", icon: "map", description: "Explore Locum Job Openings in Queensland (QLD)" },
          { label: "Western Australia (WA)", href: "/locum/jobs/in-western-australia?page=1", icon: "map", description: "Explore Locum Job Openings in Western Australia" },
          { label: "Victoria (VIC)", href: "/locum/jobs/in-victoria?page=1", icon: "map", description: "Explore Locum Job Openings in Victoria (VIC)" },
          { label: "Tasmania (TAS)", href: "/locum/jobs/in-tasmania?page=1", icon: "map", description: "Explore Locum Job Openings in Tasmania (TAS)" },
        ],
      },
    ],
    explore: {
      heading: "Browse Jobs by Key Cities",
      links: [
        { label: "Sydney, New South Wales", href: "/permanent/jobs/in-western-sydney?page=1" },
        { label: "Melbourne, Victoria", href: "/permanent/jobs/in-south-eastern-melbourne?page=1" },
        { label: "Brisbane, Queensland", href: "/permanent/jobs/in-brisbane-south?page=1" },
        { label: "Perth, Western Australia", href: "/permanent/jobs/in-south-perth?page=1" },
        { label: "Adelaide, South Australia", href: "/permanent/jobs/in-adelaide?page=1" },
        { label: "Gold Coast, Queensland", href: "/permanent/jobs/in-gold-coast?page=1" },
        { label: "Canberra, Australian Capital Territory", href: "/permanent/jobs/in-canberra?page=1" },
        { label: "Hobart, Tasmania", href: "/permanent/jobs/in-hobart?page=1" },
        { label: "Wollongong, New South Wales", href: "/permanent/jobs/in-south-western-sydney?page=1" },
        { label: "Geelong, Victoria", href: "/permanent/jobs/in-geelong?page=1" },
      ],
    },
  },

  medical: {
    title: "General Practice",
    titleHref: "/general-practice-division",
    hub: {
      title: "General Practitioner Hub",
      titleHref: "/general-practice-division",
      image: gpHubImage,
      description: "Access GP roles, market insights, and career support tailored to your clinical focus.",
      buttonLabel: "Explore GP Hub",
      buttonHref: "/general-practice-division",
    },
    professionsHeading: "Professions",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Specialist GP (FRACGP/FACRRM)",
            href: "/general-practice-division/fracgp-facrrm",
            icon: "fracgp",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "Locum GP",
            href: "/general-practice-division/locum-gp",
            icon: "clock",
            description: "Chart your course to success in the Australian healthcare",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "GP Registrar",
            href: "/general-practice-division/gp-registrars",
            icon: "stethoscope",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "International GP",
            href: "/international/family-medicine-jobs/in-australia?page=1",
            icon: "globe",
            description: "Chart your course to success in the Australian healthcare",
          },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
      links: [
        { label: "GP Jobs in Victoria", href: "/permanent/jobs/in-victoria?page=1" },
        { label: "Permanent Roles in Perth", href: "/permanent/jobs/in-south-perth?page=1" },
        { label: "Locum Jobs in NSW", href: "/locum/jobs/in-new-south-wales?page=1" },
        { label: "Gp Jobs in Tasmania", href: "/permanent/jobs/in-tasmania?page=1" },
        { label: "Locum Gp Jobs", href: "/locum/jobs/in-australia?page=1" },
        { label: "International OT Jobs", href: "/ahp-division/occupational-therapist" },
      ],
    },
  },

  allied: {
    title: "Allied Health",
    titleHref: "/ahp-division",
    hub: {
      title: "Allied Health Hub",
      titleHref: "/ahp-division",
      image: alliedHubImage,
      description: "Access allied health roles, market insights, and career support tailored to your clinical specialty.",
      buttonLabel: "Explore Allied Health Hub",
      buttonHref: "/ahp-division",
    },
    professionsHeading: "Professions",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Speech Pathologist",
            href: "/ahp-division/speech-pathology",
            icon: "speech",
            description: "Rewarding opportunities in paediatrics, adults, and clinical settings.",
          },
          {
            label: "Occupational Therapist",
            href: "/ahp-division/occupational-therapist",
            icon: "Occupation",
            description: "Diverse experiences across health, NDIS, and rehabilitation services.",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Physiotherapy",
            href: "/ahp-division/physiotherapy",
            icon: "Physio",
            description: "Deliver patient-centred care in hospitals, clinics, or community settings.",
          },
          {
            label: "Podiatrist",
            href: "/ahp-division/podiatrist",
            icon: "Podia",
            description: "Help patients with foot health, mobility, and long-term care.",
          },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
      links: [
        { label: "Speech Pathology Jobs in NSW", href: "/permanent/speech-pathologist-jobs/in-new-south-wales?page=1" },
        { label: "Physiotherapy Jobs in VIC", href: "/permanent/physiotherapy-jobs/in-victoria?page=1" },
        { label: "OT Roles in Queensland", href: "/permanent/occupational-therapists-jobs/in-queensland?page=1" },
        { label: "Podiatry Jobs in WA", href: "/permanent/podiatry-jobs/in-western-australia?page=1" },
      ],
    },
  },

  mental: {
    title: "Mental Health",
    titleHref: "/mental-health",
    hub: {
      title: "Mental Health Hub",
      titleHref: "/mental-health",
      image: mentalHubImage,
      description: "Explore mental health roles, career resources, and support tailored to your specialisation.",
      buttonLabel: "Explore Mental Health Hub",
      buttonHref: "/mental-health",
    },
    professionsHeading: "Professions",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Psychology",
            href: "/mental-health/psychology",
            icon: "Psysio",
            description: "Provide mental health support and evidence-based care across clinical and community settings.",
          },
        ],
      },
      {
        heading: "",
        links: [],
      },
    ],
    explore: {
      heading: "Explore More",
      links: [
        { label: "Psychology Jobs in NSW", href: "/permanent/psychology-jobs/in-new-south-wales?page=1" },
        { label: "Psychology Jobs in VIC", href: "/permanent/psychology-jobs/in-victoria?page=1" },
        { label: "Psychology Jobs in Tasmania", href: "/permanent/psychology-jobs/in-tasmania?page=1" },
      ],
    },
  },

  oral: {
    title: "Oral Health",
    titleHref: "/",
    hub: {
      title: "Oral Health Hub",
      titleHref: "/",
      image: oralHubImage,
      description: "Find dentistry and oral health roles across Australia with career support and placement expertise.",
      buttonLabel: "Explore Oral Health Hub",
      buttonHref: "/",
    },
    professionsHeading: "Professions",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Dentist",
            href: "/permanent/dentists-jobs/in-australia?page=1",
            icon: "stethoscope",
            description: "Provide high-quality oral healthcare in clinical and community settings.",
          },
          {
            label: "General Dentist",
            href: "/permanent/general-dentist-jobs/in-australia?page=1",
            icon: "user",
            description: "Comprehensive dental care including preventive and restorative treatments.",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Dental Specialist",
            href: "/permanent/dental-jobs/in-australia?page=1",
            icon: "briefcase",
            description: "Expert care in orthodontics, endodontics, periodontics, and oral surgery.",
          },
          {
            label: "Oral Hygienist",
            href: "/permanent/oral-hygienist-jobs/in-australia?page=1",
            icon: "heart",
            description: "Preventive dental care and oral health promotion in clinical settings.",
          },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
      links: [
        { label: "Dentist Jobs in NSW", href: "/permanent/dentists-jobs/in-australia?page=1" },
        { label: "Dentist Jobs in VIC", href: "/permanent/dentists-jobs/in-australia?page=1" },
        { label: "Dental Specialist Roles", href: "/permanent/dental-jobs/in-australia?page=1" },
      ],
    },
  },

  candidates: {
    title: "Candidates",
    titleHref: "/",
    hub: {
      title: "Candidate Hub",
      titleHref: "/",
      image: candidatesHubImage,
      description: "Access resources, tools, and support to advance your healthcare career in Australia.",
      buttonLabel: "Explore Candidate Hub",
      buttonHref: "/",
    },
    professionsHeading: "Resources",
    columns: [
      {
        heading: "",
        links: [
          { label: "Medical Professionals", href: "/", icon: "stethoscope", description: "Chart your course to success in the Australian healthcare" },
          { label: "Allied Health Professionals", href: "/international", icon: "heart", description: "Chart your course to success in the Australian healthcare" },
          { label: "Mental Health Professionals", href: "/international", icon: "user", description: "Chart your course to success in the Australian healthcare" },
        ],
      },
      {
        heading: "",
        links: [
          { label: "Dentistry & Oral Health Professionals", href: "/permanent", icon: "briefcase", description: "Chart your course to success in the Australian healthcare" },
          { label: "Refer and Earn", href: "/locum", icon: "globe", description: "Chart your course to success in the Australian healthcare" },
          { label: "Locum Shift Calendar", href: "/international", icon: "clock", description: "Chart your course to success in the Australian healthcare" },
          { label: "Candidate Resources", href: "/international", icon: "map", description: "Chart your course to success in the Australian healthcare" },
        ],
      },
    ],
    explore: {
      heading: "Browse Jobs by Key Cities",
      links: [
        { label: "Sydney, New South Wales", href: "/permanent/jobs/in-western-sydney?page=1" },
        { label: "Melbourne, Victoria", href: "/permanent/jobs/in-south-eastern-melbourne?page=1" },
        { label: "Brisbane, Queensland", href: "/permanent/jobs/in-brisbane-south?page=1" },
        { label: "Perth, Western Australia", href: "/permanent/jobs/in-south-perth?page=1" },
        { label: "Adelaide, South Australia", href: "/permanent/jobs/in-adelaide?page=1" },
        { label: "Gold Coast, Queensland", href: "/permanent/jobs/in-gold-coast?page=1" },
        { label: "Canberra, Australian Capital Territory", href: "/permanent/jobs/in-canberra?page=1" },
        { label: "Hobart, Tasmania", href: "/permanent/jobs/in-hobart?page=1" },
        { label: "Wollongong, New South Wales", href: "/permanent/jobs/in-south-western-sydney?page=1" },
        { label: "Geelong, Victoria", href: "/permanent/jobs/in-geelong?page=1" },
      ],
    },
  },
};

export default function MegaMenu({ menuKey }: { menuKey: MenuKey }) {
  const menu = MEGA_MENU_CONFIG[menuKey];

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [top, setTop] = useState(0);

  useEffect(() => setMounted(true), []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTop(rect.bottom + 8);
    setOpen(true);
  };

  if (!menu) return null;

  const hasHub = !!menu.hub;

  return (
    <>
      {/* Trigger */}
      <Link href={menu.titleHref || "#"}>
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setOpen(false)}
          className="hover:text-gray-400 cursor-pointer"
        >
          {menu.title}
        </button>
      </Link>

      {mounted &&
        createPortal(
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`fixed z-[99] transition-all duration-150 w-full  left-0 ${open ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            style={{ top }}
          >
            <div className=" inner-width-section border-gray-200">
              <div className="mx-auto px-0 py-0 mt-2 bg-white">
                {/* Layout: Hub | Divider | Professions | Divider | Explore More */}
                <div className="flex gap-0 bg-white" >

                  {/* ── LEFT: Hub Panel ── */}
                  {/* ── LEFT: Hub Panel ── */}
                  {/* ── LEFT: Hub Panel ── */}
                  {hasHub && (
                    <>
                      <div className="w-[270px] flex-shrink-0 px-8 bg-white shadow-[20px_0_40px_-35px_rgba(0,0,0,0.3)] py-4 relative">

                        {/* Arrow — sits ON the right edge / shadow line */}
                        <Link
                          href={menu.hub!.titleHref || "#"}
                          className="absolute -right-5 top-4 z-10 w-[40px] h-[40px] rounded-full shadow-md border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#040D48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>

                        {/* Title row — no arrow here anymore */}
                        <div className="mb-4">
                          <h3 className="text-[16px] font-[700] text-[#040D48] leading-tight">
                            {menu.hub!.title}
                          </h3>
                        </div>

                        {/* Image */}
                        <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 h-[135px] relative">
                          <Image
                            src={menu.hub!.image}
                            alt={menu.hub!.title}
                            fill
                            className="object-cover"
                            sizes="220px"
                          />
                        </div>

                        {/* Description */}
                        <p className="text-[12px] text-gray-600 mb-4 leading-relaxed">
                          {menu.hub!.description}
                        </p>

                        {/* CTA Button */}
                        <Link href={menu.hub!.buttonHref}>
                          <button className="w-full bg-[#074CA4] hover:bg-[#0557be] text-white text-[13px] font-[500] px-4 py-2.5 rounded-[8px] transition-colors cursor-pointer">
                            {menu.hub!.buttonLabel}
                          </button>
                        </Link>
                      </div>

                      {/* Vertical divider */}
                      <div className="w-px bg-gray-200 mx-4 hidden self-stretch flex-shrink-0" />
                    </>
                  )}

                  {/* ── MIDDLE: Professions / Columns ── */}
                  <div className="flex-1 px-16 py-4 bg-white">
                    {menu.professionsHeading && (
                      <h4 className="text-[16px] font-[700] text-[#0F172A] mb-4 pb-1 border-gray-200">
                        {menu.professionsHeading}
                      </h4>
                    )}
                    <div className="grid gap-x-8" style={{ gridTemplateColumns: `repeat(${menu.columns.length}, 1fr)` }}>
                      {menu.columns.map((col, i) => (
                        <div key={i} className="space-y-5">
                          {col.heading && (
                            <p className="text-[14px] font-[700] text-[#074CA4] uppercase tracking-wide">
                              {col.heading}
                            </p>
                          )}
                          {col.links.map((link, j) => (
                            <Link key={j} href={link.href} className="flex items-start gap-3 group">
                              {/* Icon circle */}
                              {link.icon && icons[link.icon] && (
                                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mt-0.5">
                                  {icons[link.icon]}
                                </div>
                              )}
                              <div>
                                <p className="text-[14px] font-[600] text-[#0D1A3E] group-hover:text-[#074CA4] transition-colors leading-snug mb-0.5">
                                  {link.label}
                                </p>
                                {link.description && (
                                  <p className="text-[11px] text-[#4A5565] leading-relaxed">
                                    {link.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── RIGHT: Explore More ── */}
                  {menu.explore && (
                    <>
                      {/* Vertical divider */}
                      <div className="w-px" />

                      <div className="w-[200px] py-4 px-0  bg-gray-200 flex-shrink-0 px-4">
                        <h4 className="text-[13px] font-[700] text-gray-800 mb-3 pb-1 border-b border-gray-500">
                          {menu.explore.heading}
                        </h4>
                        <ul className="space-y-2">
                          {menu.explore.links.map((link, i) => (
                            <li key={i}>
                              <Link
                                href={link.href}
                                className="text-[12px] text-[#374151] hover:text-[#074CA4] hover:underline transition-colors block leading-snug"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}