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
      <div className="circlr"></div>
      <div className="installation var-grey">

        <div class="container">
          <div class="description-headline">
            <h2 style={{ textAlign: 'center' }}>Pre-installed Operating Systems</h2></div>
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
              <strong class="description-label">Windows</strong></div></div></div>

      </div>

    </div>

  </div>
)

export default SecondPage
