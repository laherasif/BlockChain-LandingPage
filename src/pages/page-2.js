import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import './page2.css'
const SecondPage = () => (
  <div>
    {/* <div className="second-page">
   <header class="hero caab-hero"><div class="container"><div class="hero-left">
<img src="https://caab.cloud/wp-content/uploads/2021/02/vms.svg" alt="" class="hero-image"/>
<h1>High Performance VMs</h1>
<p>With CaaB’s Virtual Servers and Virtual Desktops, your end-customers will enjoy some of the fastest and high-performing virtual machines on the market. CaaB’s Cloud Servers are available in both Linux and Windows operation systems and are hosted on VMware virtualization with 99.99% SLAs.</p></div><div class="hero-right">
<div class="hero-box">
<p style={{textAlign: "center"}}>
<strong>Flexible, Fast, Virtual Servers</strong></p>
<p style={{textAlign: "center"}}><span class="price">
<span class="price-note">Starting from</span> 
<span class="price-amount">$9</span>
<span class="price-duration">/Mo</span></span>
</p><ul><li>Top Performance</li><li>VMware Based</li>
<li>Easy to Scale VMs</li><li>Customizable Configuration</li>
<li>Windows &amp; Linux OS</li></ul>
<a class="btn btn-secondary bold modal-signup" href="#">Book Demo</a>
</div></div>
</div></header>
   </div> */}


    <div className="hero ">
      <div className="row">
        <div className="container">
          <div className="col-md-12">
            <div className="cloud">
              <div className="row">
                <div className="col-md-6">
                  <div className="hero-left">
                    <img src="https://caab.cloud/wp-content/uploads/2021/02/vms.svg" alt="" class="hero-image" />
                    <h1>High Performance VMs</h1>
                    <p>With CaaB’s Virtual Servers and Virtual Desktops, your end-customers will enjoy some of the fastest and high-performing virtual machines on the market. CaaB’s Cloud Servers are available in both Linux and Windows operation systems and are hosted on VMware virtualization with 99.99% SLAs.</p></div>
                </div>
                <div className="col-md-6">

                  <div class="hero-right">
                    <div className="box">
                      <p style={{ textAlign: "center" }}>
                        <strong>Flexible, Fast, Virtual Servers</strong>
                      </p>
                      <p style={{ textAlign: "center" }}>
                        <span class="price">
                          <span class="price-note">Starting from</span>
                          <span class="price-amount">$9</span>
                          <span class="price-duration">/Mo</span>
                        </span>
                      </p>
                      <ul>
                        <li>Top Performance</li><li>VMware Based</li>
                        <li>Easy to Scale VMs</li><li>Customizable Configuration</li>
                        <li>Windows &amp; Linux OS</li>
                      </ul>
                      <a class="btn btn-secondary bold modal-signup" href="#">Book Demo</a>

                    </div>
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>

    </div>


    <div class="description caab-section var-grey">
      <div class="container">
        <div class="description-headline">
          <h2 style={{ textAlign: "center" }}>Pre-installed Operating Systems</h2></div>
        <div class="description-logo-grid">
          <div class="description-logo" data-modal-desc="CentOS (from Community ENTerprise Operating System) is a Linux distribution that provides a free, enterprise-class, community-supported computing platform functionally compatible with its upstream source, Red Hat Enterprise Linux (RHEL).">
            <button class="description-toggle">
              <img src="https://caab.cloud/wp-content/uploads/2021/02/centos.png" alt="" />
            </button>
            <strong class="description-label">CentOS</strong></div><div class="description-logo" data-modal-desc="Debian is a Unix-like computer operating system that is composed entirely of free software, and packaged by a group of individuals participating in the Debian Project.As one of the earliest operating systems based on the Linux kernel, it was decided that Debian was to be developed openly and freely distributed in the spirit of the GNU Project.">
            <button class="description-toggle">
              <img src="https://caab.cloud/wp-content/uploads/2021/02/debian.png" alt="" />
            </button>
            <strong class="description-label">Debian</strong></div><div class="description-logo" data-modal-desc="FreeBSD is a free and open-source Unix-like operating system descended from Research Unix via the Berkeley Software Distribution (BSD).FreeBSD is an operating system used to power modern servers, desktops, and embedded platforms. A large community has continually developed it for more than thirty years. Its advanced networking, security, and storage features have made FreeBSD the platform of choice for many of the busiest web sites and most pervasive embedded networking and storage devices.">
            <button class="description-toggle">
              <img src="https://caab.cloud/wp-content/uploads/2021/02/freebsd.png" alt="" />
            </button>
            <strong class="description-label">FreeBSD</strong></div><div class="description-logo" data-modal-desc="Ubuntu Server is a free and open-source operating system and Linux distribution based on Debian.Ubuntu is the most popular operating system for the cloud, with built-in support for zfs file-system, lxd, nginx web server, most databases and more advanced services.">
            <button class="description-toggle">
              <img src="https://caab.cloud/wp-content/uploads/2021/02/ubuntu.png" alt="" />
            </button>
            <strong class="description-label">Ubuntu</strong></div><div class="description-logo" data-modal-desc="Windows Server is a server operating system developed by Microsoft.Windows Server is generally capable of providing server-oriented services, such as the ability to host a website, user management, resource management across users and applications, messaging, security and authorization and many other server-focused services.">
            <button class="description-toggle">
              <img src="https://caab.cloud/wp-content/uploads/2021/02/windows.png" alt="" />
            </button>
            <strong class="description-label">Windows</strong></div>
        </div>
      </div>
    </div>

    <div class="features">
      <div class="container">
        <div class="features-headline">
          <h2 style={{ textAlign: "center" }}>Simplify your global compute</h2>
          <p style={{ textAlign: "center" }}>Update your cloud infrastructure strategy with us</p>
        </div>
        <div class="features-block-grid">
          <div class="features-block">
            <svg class="features-icon icon easy">
              <use xlinkHref='#easy'>
              <svg id="easy" viewBox="0 0 51.6 68.8"  xmlns="http://www.w3.org/2000/svg"><path class="anst0" d="M51.5 50.7c.2-.4.1-1-.2-1.3L22.4 20.6c-.3-.3-.9-.5-1.3-.3s-.7.6-.7 1.1v40c0 .7.5 1.2 1.2 1.2.3 0 .5-.1.7-.2l7.6-5.9 6.5 11.8c.3.5 1 .7 1.6.5l8.7-4.3c.3-.1.5-.4.6-.7s.1-.7-.1-.9L41 51.7h9.5c.4-.2.8-.5 1-1zm-12.7-1.6c-.7 0-1.2.6-1.1 1.2 0 .2.1.4.1.5l6.6 11.9-6.6 3.3-6.7-12c-.2-.3-.5-.5-.8-.6-.4-.1-.7 0-1 .2l-6.7 5.3V24.3l24.8 24.8h-8.6zM21.5 0c-.7 0-1.2.5-1.2 1.2v8.7c.1.7.6 1.1 1.3 1.1.6-.1 1-.5 1.1-1.1V1.2c0-.7-.5-1.2-1.2-1.2zM10 20.2H1.3c-.7-.1-1.2.4-1.3 1.1s.4 1.2 1.1 1.3H10c.7-.1 1.1-.6 1.1-1.3-.1-.6-.6-1-1.1-1.1zm31.7 0H33c-.7-.1-1.2.4-1.3 1.1-.1.7.4 1.2 1.1 1.3h8.9c.7-.1 1.1-.6 1.1-1.3 0-.6-.5-1-1.1-1.1zM8.1 6.3c-.5-.5-1.3-.4-1.7.1S6 7.5 6.4 8l6.1 6.1c.5.4 1.2.4 1.7 0 .5-.5.5-1.2 0-1.7L8.1 6.3zm5.2 22.1c-.3 0-.6.1-.8.3l-6.1 6.1c-.2.3-.4.6-.4.9s.1.6.4.8c.5.4 1.2.4 1.7 0l6.1-6.2c.5-.5.5-1.2 0-1.7-.2-.1-.5-.2-.9-.2zM36.6 6.3c-.2-.2-.5-.4-.8-.4-.3 0-.6.1-.8.4l-6.1 6.1c-.2.2-.4.5-.3.9 0 .3.1.6.3.8.5.4 1.2.4 1.7 0L36.7 8c.4-.5.4-1.3-.1-1.7.1 0 .1 0 0 0z" fill="#0047ba"></path></svg>
              </use>
            </svg><p><strong>Terminal Servers</strong></p><p>Deploy Linux or Windows based Remote Desktop Servers for your customers in less than 60 seconds.</p></div><div class="features-block">
            <svg class="features-icon icon white-label">
              <use xlinkHref="#white-label">
              <svg viewBox="0 0 63.2 63.1" id="white-label" xmlns="http://www.w3.org/2000/svg"><path d="M55 12.2h-.2c-1.1-4.9-6-8-10.9-6.9-.5.1-1 .3-1.5.5-3-5.4-9.8-7.3-15.3-4.3-3.5 2-5.7 5.7-5.7 9.7-.6.3-1.1.7-1.7 1.1H5.1c-2.8 0-5.1 2.3-5.1 5.1V48c0 2.7 2.3 5 5.1 5h10.8l-1.3 4.1h-.3c-2.8 0-5.1 2.3-5.1 5.1v1h36.6v-1c0-2.8-2.3-5.1-5.1-5.1h-.3L39.1 53h10.8c2.8 0 5.1-2.3 5.1-5.1V28.5c4.5 0 8.2-3.6 8.2-8.1s-3.7-8.2-8.2-8.2zM43.6 61.1H11.4c.4-1.2 1.6-2 2.9-2h26.5c1.2 0 2.4.8 2.8 2zm-5.3-4H16.7l1.4-4.1H37l1.3 4.1zM53 47.9c0 1.7-1.4 3-3.1 3H5.1c-1.7 0-3-1.3-3-3V17.3c0-1.7 1.4-3 3-3h12.8c-.4.6-.8 1.3-1 2H6.1c-1.1 0-2 .9-2 2v24.5c0 1.1.9 2 2 2h42.8c1.1 0 2-.9 2-2V28.5h2l.1 19.4zm-4.1-19.4v14.3H6.1V18.3h10.3c0 .3-.1.7-.1 1 0 5.1 4.1 9.2 9.2 9.2h23.4zm6.1-2H25.5c-3.9 0-7.1-3.2-7.1-7.1 0-2.9 1.8-5.5 4.5-6.6l.7-.3-.1-.9v-.4c0-5.1 4.1-9.2 9.2-9.2 3.6 0 6.9 2.2 8.4 5.5l.4 1 1-.5c1.1-.6 2.2-.9 3.4-.9 3.6 0 6.7 2.7 7.1 6.3l.1 1 1-.2c.3 0 .6-.1.9-.1 3.4 0 6.1 2.7 6.1 6.1s-2.7 6.3-6.1 6.3z" fill="#0047ba"></path></svg>
              </use>
            </svg><p>
              <strong>Virtual Desktops</strong></p><p>Are your customer’s end users working remotely? Activate a VDI for best user’s experience.</p></div><div class="features-block">
            <svg class="features-icon icon flexibility">
              <use xlink href="#flexibility">
              <svg id="flexibility" viewBox="0 0 58.2 67.5" xmlns="http://www.w3.org/2000/svg"><path class="aqst0" d="M7.1 60.5c0 .4.2.8.6 1l10.8 6c.4.2.8.2 1.1 0 .4-.2.6-.6.6-1v-1.6h30c.6 0 1.1-.5 1.1-1.1v-6.7c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1 1.1v5.5H19c-.6 0-1.2.5-1.2 1.1v.9l-7.3-4.1 7.3-4.1v.8c0 .6.5 1.1 1.1 1.1H36c.6.1 1.2-.4 1.2-1 .1-.6-.4-1.2-1-1.2h-16v-1.6c0-.4-.2-.8-.6-1-.2-.1-.4-.2-.6-.2s-.4.1-.6.2l-10.8 6c-.3.1-.5.5-.5 1z" fill="#0047ba"></path><path class="aqst0" d="M44.3 56.7l-.1-.2c0-.1-.1-.1-.1-.2l-.2-.1c-.1 0-.1-.1-.2-.1s-.1-.1-.2-.1H43c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1l-.2.1c0 .1-.1.1-.1.2s-.1.1-.1.2 0 .1-.1.2v.4c0 .1 0 .1.1.2 0 .1.1.1.1.2s.1.1.1.2c.1 0 .1.1.2.1l.2.1c.1 0 .1.1.2.1h.5c.1 0 .1 0 .2-.1l.2-.1.2-.1c.1 0 .1-.1.1-.1 0-.1.1-.1.1-.2.1-.1.1-.3.1-.4V57c0-.1-.1-.2-.1-.3zm-5.5-42.6c.4.2.8.2 1.1 0l10.8-6c.6-.3.8-1 .5-1.5-.1-.2-.3-.4-.5-.5L39.9.1c-.4-.2-.8-.2-1.1 0-.4.2-.6.6-.6 1v1.6h-30c-.6 0-1.1.5-1.1 1.1v6.6c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1V5h30c.6 0 1.2-.5 1.2-1.1v-.8l7.3 4.1-7.3 4.1v-.8c0-.6-.5-1.1-1.1-1.1H22.3c-.6-.1-1.2.4-1.2 1s.4 1.2 1 1.2h16.2v1.6c0 .4.2.7.5.9z" fill="#0047ba"></path><path class="aqst0" d="M16.2 10c0-.1-.1-.1-.1-.2s-.1-.1-.2-.2c0-.1-.1-.1-.2-.1l-.2-.1c-.1 0-.1-.1-.2-.1h-.4c-.1 0-.1 0-.2.1l-.2.1-.2.1c-.1 0-.1.1-.1.1 0 .1-.1.1-.1.2s-.1.1-.1.2v.4c0 .1.1.3.2.4 0 .1.1.1.1.2l.2.1.2.1c.1 0 .1 0 .2.1h.4c.1 0 .1 0 .2-.1l.2-.1.2-.1.2-.2c0-.1.1-.1.1-.2s0-.1.1-.2v-.4c-.1.1-.1 0-.1-.1zm-4.8 40.8H47c6 .2 11-4.5 11.1-10.5.2-6-4.5-11-10.5-11.1h-1.8V29c-.8-5.1-5.7-8.5-10.7-7.7-.6.1-1.2.3-1.8.5h-.2v-.1c-.9-2-2.2-3.8-4-5.1-2.1-1.6-4.7-2.5-7.4-2.5a12.291 12.291 0 00-12 15v.2h-.1C3.7 30-.6 35.3.1 41.2c.6 5.7 5.5 9.9 11.3 9.6zM4.9 33.7c1.6-1.7 3.9-2.6 6.2-2.7.3 0 .6-.2.7-.4.2-.2.2-.5.1-.8-1.9-5.4 1-11.4 6.4-13.3 3.3-1.1 6.9-.6 9.7 1.5 1.8 1.3 3.1 3.2 3.7 5.3.1.3.3.5.5.6.3.1.5.1.8 0 3.7-1.9 8.2-.6 10.1 3.1.5 1 .8 2.1.9 3.3 0 .3.1.5.3.7s.5.2.8.2c.6-.1 1.2-.2 1.8-.2 5 0 9 4 9 9s-4 9-9 9H11.4c-5 0-9-4-9-9-.1-2.3.8-4.6 2.5-6.3z" fill="#0047ba"></path></svg>
              
              </use>
            </svg><p><strong>Traffic Included</strong></p><p>With CaaB’s Virtual Machines include unlimited DISK IOPS and 5 TB of Traffic per virtual machine.</p></div><div class="features-block">
            <svg class="features-icon icon rocket">
              <use xlink href="#rocket">
              <svg id="rocket" viewBox="0 0 64.5 64.1" xmlns="http://www.w3.org/2000/svg"><path class="bist0" d="M24.8 39.4c.4.4 1.1.4 1.6 0 .4-.4.4-1.1 0-1.6-.2-.2-.5-.3-.8-.3-.6 0-1.1.5-1.1 1.1-.1.3.1.6.3.8zm8.9-16.2c0 2 .8 3.8 2.2 5.2 2.9 2.9 7.6 2.9 10.5 0s2.9-7.5 0-10.4c-2.9-2.9-7.6-2.9-10.5 0-1.4 1.4-2.2 3.2-2.2 5.2zm3.8-3.6c2-2 5.3-2 7.3 0s2 5.2 0 7.2-5.3 2-7.3 0-2-5.2 0-7.2z"fill="#0047ba"></path>
              <path class="bist0" d="M64.5 1.2c0-.3-.1-.6-.3-.8-.3-.3-.6-.4-.9-.4-6.4.4-12.7 1.7-18.7 3.9a51.5 51.5 0 00-19.8 11.9c-1.2 1.1-2.3 2.4-3.4 3.6-.1.2-.4.2-.6.1-5-2.9-9-2-11.4-.7C3.6 21.9 0 30.4 0 36.5c0 .4.3.8.7 1s.9.1 1.2-.2c2.3-2.2 5.5-3.3 8.7-2.9.1 0 .2.1.3.1l.5.5c.1.1.2.3.1.5-1 2.5-1.9 5-2.6 7.5-.2.8-.1 1.7.2 2.4.1.2 0 .5-.2.6-1.5.7-2.9 1.7-4.1 2.9-4 3.9-4.8 13.6-4.8 14 0 .3.1.6.3.9.2.2.5.3.8.3.5 0 10.2-.8 14.1-4.7 1.2-1.2 2.2-2.6 2.9-4.1.1-.2.3-.3.6-.2.8.3 1.6.4 2.5.2 2.6-.7 5.1-1.5 7.6-2.6h.2c.1 0 .2 0 .3.1l.5.6c.1.1.1.2.1.3.4 3.2-.7 6.4-2.9 8.7-.3.3-.4.8-.2 1.2.2.4.6.7 1 .7 6.1 0 14.6-3.6 17.7-9.4 1.3-2.4 2.3-6.4-.7-11.3-.1-.2-.1-.4.1-.6 1.3-1.1 2.5-2.2 3.6-3.3 5.4-5.6 9.5-12.3 12-19.7 2.2-6.2 3.6-12.5 4-18.8zM3.2 33.5H3c-.2 0-.4-.2-.4-.5v-.1c.9-4.5 3.7-10 7.9-12.2 2.7-1.4 5.7-1.3 8.8.4.1.1.2.2.2.3 0 .1 0 .3-.1.4-2.5 3.3-4.7 6.9-6.6 10.6-.1.1-.1.2-.3.2-.1.1-.2.1-.4 0l-.1-.1c-.2-.2-.4-.3-.6-.3-2.7-.5-5.6 0-8.2 1.3zm13.2 20.1c-.6 1.6-1.5 3-2.8 4.2-2.5 2.5-8.3 3.5-10.7 3.9-.1 0-.2 0-.3-.1s-.1-.2-.1-.4c.3-2.4 1.4-8.2 3.9-10.6 1.2-1.2 2.6-2.1 4.2-2.7.2-.1.3 0 .5.1l5.3 5.2s.1.2 0 .4zM26.7 51c-2 .8-4 1.5-6.1 2h-.4c-.5 0-1-.2-1.4-.6l-7.1-7.1c-.5-.5-.7-1.1-.6-1.8.5-2 1.2-4 2-6l.3-.3c.1 0 .3 0 .4.1l13 12.9c.1.1.2.3.1.4.1.3-.1.4-.2.4zm16.8 2.6c-2.2 4.1-7.8 6.9-12.3 7.8h-.1c-.1 0-.3-.1-.4-.2-.1-.1-.1-.3 0-.5 1.3-2.5 1.8-5.4 1.3-8.2l-.3-.6-.1-.1c-.1-.1-.1-.2-.1-.4 0-.1.1-.2.2-.3 3.8-1.8 7.3-4 10.7-6.5.1-.1.2-.1.4-.1.1 0 .2.1.3.2 1.8 3.3 1.9 6.2.4 8.9zM58.1 20C55.8 26.7 52 32.8 47 37.9c-1.5 1.4-3 2.8-4.6 4.1-3.9 3.1-8.1 5.7-12.6 7.8h-.2c-.1 0-.2 0-.3-.1L14.5 35c-.1-.1-.2-.3-.1-.5 2.1-4.5 4.7-8.7 7.8-12.5 1.3-1.6 2.7-3.1 4.1-4.5 5.1-4.9 11.3-8.7 18-11.1.2-.1.4 0 .5.1l13.2 13c.2.1.2.3.1.5zm.9-3c-.2 0-.3-.1-.4-.1L47.6 6c-.1-.1-.2-.3-.1-.4 0-.2.2-.3.3-.3C52.3 3.9 57 3 61.7 2.5c.1 0 .3 0 .4.1.1.1.1.2.1.4-.5 4.7-1.4 9.3-2.8 13.8-.2 0-.3.1-.4.2z" fill="#0047ba"></path>
              <path class="bist0" d="M33.4 32c0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3s-.6.1-.8.3l-2.2 2.2c-.4.4-.4 1.1 0 1.6.4.4 1.1.4 1.6 0l2.2-2.2c.2-.2.3-.5.3-.8z" fill="#0047ba"></path></svg>
              </use>
            </svg><p><strong>100% SSD</strong></p><p>Top performing SSD Disks included, offering some of the fastest read /write speeds in the industry.</p></div><div class="features-block">
            <svg class="features-icon icon pricing">
              <use xlink href="#pricing">
              <svg id="pricing" viewBox="0 0 58 69.1" xmlns="http://www.w3.org/2000/svg"><path class="best0" d="M0 10v58.1c0 .6.4 1 1 1h49.2c.6 0 1-.4 1-1V30c7.4-5.5 8.9-15.9 3.4-23.3S38.8-2.2 31.4 3.3c-2 1.5-3.6 3.4-4.8 5.6H1.1C.5 8.9 0 9.3 0 10c0-.1 0-.1 0 0zm41.3-7.9C49.4 2.1 56 8.6 56 16.7s-6.5 14.7-14.6 14.7-14.7-6.5-14.7-14.6c0-8.2 6.5-14.7 14.6-14.7zM28 26.7l.1.2H6.6V15.5h18.1v1.3c0 3.5 1.1 7 3.3 9.9zM2.1 11h23.6v.1c-.3.7-.5 1.5-.7 2.2v.1H5.5c-.6 0-1 .4-1 1v13.4c0 .6.4 1 1 1H30c5.2 4.8 12.8 5.8 19.1 2.5l.2-.1V67H2.1V11z" fill="#0047ba">
              </path>
              <path class="best0" d="M45.7 19c0-1.8-1.5-3.3-3.3-3.3h-2.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2h5.5v-2h-3.4V9.1h-2v2.2h-.1c-1.8-.1-3.3 1.3-3.4 3.1s1.3 3.3 3.1 3.4h2.6c.7-.1 1.3.4 1.3 1.1.1.7-.4 1.3-1.1 1.3H37v2h3.4v2.3h2v-2.3h.1c1.7.1 3.2-1.3 3.2-3.2zM11.1 40.2H6.7v-4.5h4.5l-.1 4.5zm1.1-6.8H5.5c-.6 0-1.1.5-1.1 1.1v6.7c0 .6.5 1.1 1.1 1.1h6.7c.6 0 1.1-.5 1.1-1.1v-6.7c.1-.6-.5-1.1-1.1-1.1" fill="#0047ba"></path>
              <path class="best0" d="M12.2 42.5H5.5c-.7 0-1.2-.5-1.2-1.2v-6.7c0-.7.5-1.2 1.2-1.2h6.7c.7 0 1.2.5 1.2 1.2v6.7c.1.6-.5 1.2-1.2 1.2zm-6.7-8.9c-.6 0-1 .4-1 1v6.7c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-6.7c0-.6-.4-1-1-1H5.5zm5.7 6.7H6.6v-4.7h4.7l-.1 4.7zm-4.4-.2H11v-4.3H6.8v4.3zm15.5.1h-4.5v-4.5h4.5v4.5zm1.1-6.8h-6.7c-.6 0-1.1.5-1.1 1.1v6.7c0 .6.5 1.1 1.1 1.1h6.7c.6 0 1.1-.5 1.1-1.1v-6.7c0-.6-.5-1.1-1.1-1.1" fill="#0047ba" ></path>
              <path class="best0" d="M23.4 42.5h-6.7c-.7 0-1.2-.5-1.2-1.2v-6.7c0-.7.5-1.2 1.2-1.2h6.7c.7 0 1.2.5 1.2 1.2v6.7c0 .6-.5 1.2-1.2 1.2zm-6.7-8.9c-.6 0-1 .4-1 1v6.7c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-6.7c0-.6-.4-1-1-1h-6.7zm5.7 6.7h-4.7v-4.7h4.7v4.7zm-4.5-.2h4.3v-4.3h-4.3v4.3zm15.6.1H29v-4.5h4.5v4.5zm1.1-6.8h-6.7c-.6 0-1.1.5-1.1 1.1v6.7c0 .6.5 1.1 1.1 1.1h6.7c.6 0 1.1-.5 1.1-1.1v-6.7c0-.6-.5-1.1-1.1-1.1" fill="#0047ba"></path>
              <path class="best0" d="M34.6 42.5h-6.7c-.7 0-1.2-.5-1.2-1.2v-6.7c0-.7.5-1.2 1.2-1.2h6.7c.7 0 1.2.5 1.2 1.2v6.7c0 .6-.5 1.2-1.2 1.2zm-6.7-8.9c-.6 0-1 .4-1 1v6.7c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-6.7c0-.6-.4-1-1-1h-6.7zm5.7 6.7h-4.7v-4.7h4.7v4.7zm-4.5-.2h4.3v-4.3h-4.3v4.3zm-18 11.2H6.7v-4.5h4.5l-.1 4.5zm1.1-6.7H5.5c-.6 0-1.1.5-1.1 1.1v6.7c0 .6.5 1.1 1.1 1.1h6.7c.6 0 1.1-.5 1.1-1.1v-6.7c.1-.6-.5-1.1-1.1-1.1" fill="#0047ba"></path>
              <path class="best0" d="M12.2 53.7H5.5c-.7 0-1.2-.5-1.2-1.2v-6.7c0-.7.6-1.2 1.2-1.2h6.7c.7 0 1.2.5 1.2 1.2v6.7c0 .6-.5 1.2-1.2 1.2zm-6.7-9c-.6 0-1 .4-1 1v6.7c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-6.7c0-.6-.4-1-1-1H5.5zm5.7 6.7H6.6v-4.7h4.7l-.1 4.7zm-4.4-.2H11V47H6.8v4.2zm15.5.1h-4.5v-4.5h4.5v4.5zm1.1-6.7h-6.7c-.6 0-1.1.5-1.1 1.1v6.7c0 .6.5 1.1 1.1 1.1h6.7c.6 0 1.1-.5 1.1-1.1v-6.7c0-.6-.5-1.1-1.1-1.1" fill="#0047ba"></path>
              <path class="best0" d="M23.4 53.7h-6.7c-.7 0-1.2-.5-1.2-1.2v-6.7c0-.7.6-1.2 1.2-1.2h6.7c.7 0 1.2.5 1.2 1.2v6.7c0 .6-.5 1.2-1.2 1.2zm-6.7-9c-.6 0-1 .4-1 1v6.7c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-6.7c0-.6-.4-1-1-1h-6.7zm5.7 6.7h-4.7v-4.7h4.7v4.7zm-4.5-.2h4.3V47h-4.3v4.2zm15.6.1H29v-4.5h4.5v4.5zm1.1-6.7h-6.7c-.6 0-1.1.5-1.1 1.1v6.7c0 .6.5 1.1 1.1 1.1h6.7c.6 0 1.1-.5 1.1-1.1v-6.7c0-.6-.5-1.1-1.1-1.1" fill="#0047ba">
              </path>
              <path class="best0" d="M34.6 53.7h-6.7c-.7 0-1.2-.5-1.2-1.2v-6.7c0-.7.6-1.2 1.2-1.2h6.7c.7 0 1.2.5 1.2 1.2v6.7c0 .6-.6 1.2-1.2 1.2zm-6.7-9c-.6 0-1 .4-1 1v6.7c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-6.7c0-.6-.4-1-1-1h-6.7zm5.7 6.7h-4.7v-4.7h4.7v4.7zm-4.5-.2h4.3V47h-4.3v4.2zm11.1-4.3h4.5v15.6h-4.5V46.9zm-2.3-1.2v17.9c0 .6.5 1.1 1.1 1.1h6.7c.6 0 1.1-.5 1.1-1.1V45.7c0-.6-.5-1.1-1.1-1.1H39c-.6 0-1.1.5-1.1 1.1" fill="#0047ba"></path>
              <path class="best0" d="M45.8 64.8h-6.7c-.7 0-1.2-.5-1.2-1.2V45.7c0-.7.6-1.2 1.2-1.2h6.7c.7 0 1.2.5 1.2 1.2v17.9c0 .7-.5 1.2-1.2 1.2zm-6.7-20.1c-.6 0-1 .4-1 1v17.9c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1V45.7c0-.6-.4-1-1-1h-6.7zm5.7 17.9h-4.7V46.8h4.7v15.8zm-4.5-.2h4.3V47h-4.3v15.4zm-29.2.1H6.7V58h4.5l-.1 4.5zm1.1-6.7H5.5c-.6 0-1.1.5-1.1 1.1v6.7c0 .6.5 1.1 1.1 1.1h6.7c.6 0 1.1-.5 1.1-1.1v-6.7c.1-.6-.5-1.1-1.1-1.1" fill="#0047ba"></path>
              <path class="best0" d="M12.2 64.8H5.5c-.7 0-1.2-.5-1.2-1.2v-6.7c0-.7.5-1.2 1.2-1.2h6.7c.7 0 1.2.5 1.2 1.2v6.7c.1.7-.5 1.2-1.2 1.2zm-6.7-8.9c-.6 0-1 .4-1 1v6.7c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-6.7c0-.6-.4-1-1-1H5.5zm5.7 6.7H6.6V58h4.7l-.1 4.6zm-4.4-.2H11v-4.2H6.8v4.2zm15.5.1h-4.5V58h4.5v4.5zm1.1-6.7h-6.7c-.6 0-1.1.5-1.1 1.1v6.7c0 .6.5 1.1 1.1 1.1h6.7c.6 0 1.1-.5 1.1-1.1v-6.7c0-.6-.5-1.1-1.1-1.1" fill="#0047ba"></path>
              <path class="best0" d="M23.4 64.8h-6.7c-.7 0-1.2-.5-1.2-1.2v-6.7c0-.7.5-1.2 1.2-1.2h6.7c.7 0 1.2.5 1.2 1.2v6.7c0 .7-.5 1.2-1.2 1.2zm-6.7-8.9c-.6 0-1 .4-1 1v6.7c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-6.7c0-.6-.4-1-1-1h-6.7zm5.7 6.7h-4.7V58h4.7v4.6zm-4.5-.2h4.3v-4.2h-4.3v4.2zm15.6.1H29V58h4.5v4.5zm1.1-6.7h-6.7c-.6 0-1.1.5-1.1 1.1v6.7c0 .6.5 1.1 1.1 1.1h6.7c.6 0 1.1-.5 1.1-1.1v-6.7c0-.6-.5-1.1-1.1-1.1" fill="#0047ba">
              </path><path class="best0" d="M34.6 64.8h-6.7c-.7 0-1.2-.5-1.2-1.2v-6.7c0-.7.5-1.2 1.2-1.2h6.7c.7 0 1.2.5 1.2 1.2v6.7c0 .7-.5 1.2-1.2 1.2zm-6.7-8.9c-.6 0-1 .4-1 1v6.7c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-6.7c0-.6-.4-1-1-1h-6.7zm5.7 6.7h-4.7V58h4.7v4.6zm-4.5-.2h4.3v-4.2h-4.3v4.2zM40.4 4.6l-.2.2-.1.2s-.1.1-.1.2v.4c0 .1 0 .2.1.2 0 .1.1.1.1.2s.1.1.2.2l.2.2.2.1c.2.1.3.1.5.1h.2c.1 0 .1 0 .2-.1.1 0 .1-.1.2-.1l.2-.1.2-.2c.1-.1.1-.1.1-.2s.1-.1.1-.2v-.4c0-.1 0-.2-.1-.2 0-.1-.1-.1-.1-.2s-.1-.1-.2-.2l-.2-.1-.2-.1-.2-.1H41c-.2 0-.3.1-.4.2h-.2zm.1 22.4l-.2.2c0 .1-.1.1-.1.2s-.1.1-.1.2v.4c0 .1 0 .2.1.2 0 .1.1.1.1.2l.2.2.2.2.2.1c.1.1.1.1.2.1h.4c.1 0 .1 0 .2-.1.1 0 .2-.1.2-.1l.2-.1.2-.2c0-.1.1-.1.1-.2s.1-.2.1-.2v-.4c0-.1 0-.2-.1-.2 0-.1-.1-.1-.1-.2s-.1-.1-.2-.2l-.2-.2c-.1 0-.1-.1-.2-.1s-.1-.1-.2-.1H41c-.2 0-.3.1-.4.2l-.1.1zm-8.6-14.3c1.1-2.5 3.1-4.5 5.6-5.5.4-.2.7-.7.5-1.2-.1-.4-.5-.6-.9-.6-.1 0-.2 0-.3.1-6.3 2.4-9.3 9.5-6.8 15.7.2.5.7.7 1.2.5s.7-.8.5-1.2c-.9-2.5-.9-5.3.2-7.8zm18.7 8c-1.1 2.5-3.1 4.5-5.6 5.5-.5.2-.7.7-.5 1.2.1.2.3.4.5.5s.5.1.7 0c6.2-2.5 9.2-9.5 6.8-15.7-.1-.2-.3-.4-.5-.5-.1 0-.2-.1-.4-.1-.1 0-.2 0-.4.1s-.4.3-.5.5-.1.5 0 .7c1 2.5 1 5.3-.1 7.8z" fill="#0047ba"></path></svg>
              </use>
            </svg><p><strong>Predictable Pricing</strong></p><p>CaaB’s virtual machines are offered both in hourly model as well as monthly flat rate billing.</p></div><div class="features-block">
            <svg class="features-icon icon tools">
              <use xlink href="#tools">
              <svg id="tools" viewBox="0 0 54.2 54.6" xmlns="http://www.w3.org/2000/svg"><path class="bxst0" d="M14.5 38.6c-.2-.3-.5-.5-.9-.5H8.2c-.4 0-.7.2-.9.5l-2.7 4.5c-.2.3-.2.8 0 1.1l2.7 4.5c.2.3.5.5.9.5h5.4c.4 0 .7-.2.9-.5l2.7-4.5c.2-.3.2-.8 0-1.1l-2.7-4.5zm.6 5L13 47.1H8.8l-2.1-3.4 2.1-3.4H13l2.1 3.3z"fill="#0047ba"></path>
              <path class="bxst0" d="M52 42L41.3 31.3c-.2-.2-.5-.3-.7-.3-.3 0-.5.1-.7.3l-.4.5c-.3.3-.9.3-1.2 0-.2-.2-.3-.4-.2-.6 0-.2.1-.4.2-.6h.1l.4-.4c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7l-2-2 4.5-4.5c.7.1 1.4.2 2.1.2 6 .1 10.9-4.7 11-10.7 0-.9-.1-1.9-.3-2.8-.1-.5-.6-.9-1.2-.8h-.1c-.2 0-.4.1-.5.3L46.8 14l-4.3-1.4-1.4-4.3 5.5-5.5c.4-.4.4-1.1 0-1.5-.1-.1-.3-.2-.5-.3-6.1-1.7-12 1.8-13.5 7.7-.4 1.5-.4 3.2-.1 4.7l-7.2 7.2L12.8 8.1 12 4.8c-.1-.3-.2-.5-.5-.6L5.2.6c-.4-.3-1-.2-1.3.2L.3 4.4c-.3.3-.4.8-.2 1.2l3.6 6.2c.1.2.4.4.6.5l3.3.8 12.5 12.5L13 33c-.7-.1-1.4-.2-2-.2-6.1-.1-11 4.8-11 10.9s4.9 10.9 10.9 10.9 10.9-4.9 10.9-10.9c0-.7-.1-1.4-.2-2l4.5-4.5 2 2c.4.4 1.1.4 1.5 0l.5-.5c.3-.4.9-.4 1.2-.1.4.3.4.9.1 1.2v.1l-.5.5c-.4.4-.4 1-.1 1.4l.1.1 10.6 10.6c1.4 1.4 3.2 2.2 5.2 2.2 4.1 0 7.4-3.3 7.4-7.4 0-2-.8-3.9-2.1-5.3zM9 11.5c-.1-.1-.3-.2-.5-.3l-3.2-.8-3-5.2 2.5-2.5 5.2 3 .8 3.3c0 .2.1.3.3.5l11.7 11.6 1.1 1-2.1 2.2L9 11.5zm10.8 29c-.3.3-.4.6-.3 1 1.2 4.8-1.6 9.6-6.4 10.8-4.8 1.3-9.6-1.6-10.8-6.3-1.3-4.8 1.6-9.6 6.3-10.9h.1c1.4-.4 2.9-.4 4.4 0 .4.1.7 0 1-.3l20.3-20.4c.3-.3.4-.6.3-1C33.5 8.8 36.3 4 41 2.8c.8-.2 1.6-.3 2.4-.3L38.9 7c-.3.3-.4.7-.3 1.1l1.8 5.4c.1.3.3.6.7.7l5.4 1.8c.4.1.8 0 1.1-.3l4.5-4.5v.2c0 4.8-3.9 8.8-8.7 8.8h-.1c-.7 0-1.5-.1-2.2-.3-.4-.1-.7 0-1 .3l-.3.3-20 20zM43 50.9l-10-10c.4-.6.6-1.3.6-2-.1-1.6-1.6-2.8-3.2-2.7-.6 0-1.1.3-1.5.6l-1.2-1.2 7.5-7.5 1.2 1.2c-.4.6-.7 1.3-.6 2 .1.8.4 1.5 1 2 1.1.9 2.6.9 3.7.1l10 10 .2.2-7.5 7.5-.2-.2zm5.6 1.2c-.6.2-1.2.3-1.9.3-.6 0-1.1-.1-1.6-.3l6.7-6.7c.9 2.8-.5 5.8-3.2 6.7zM36.4 18.4L19.3 35.5" fill="#0047ba"></path>
              <path class="bxst0" d="M19.3 36.5c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l17.1-17.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4L20 36.2c-.2.2-.4.3-.7.3z"fill="#0047ba"></path></svg>
              </use>
            </svg><p><strong>Customized Specs</strong></p><p>Cloud virtual machine’s hardware can be fully customized for best utilization, improved performance and low total cost (TCO).</p></div></div></div></div>

  </div>
)

export default SecondPage
