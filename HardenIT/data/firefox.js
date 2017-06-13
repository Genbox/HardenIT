var firefoxData = [
  {
    "Name": "API and DOM",
    "Categories": [
      {
        "Name": "HTML5",
        "Settings": [
          {
            "Name": "browser.send_pings",
            "FriendlyName": "HTML5 browser pings enabled",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "As part of the new HTML5 standard, \"a\" tags can now have a ping attribute that will be visited by the browser when the user clicks the link. See http://kb.mozillazine.org/Browser.send_pings for more info."
          },
          {
            "Name": "browser.send_pings.require_same_host",
            "FriendlyName": "Require the pings to be on the same host",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean",
            "Description": "See http://kb.mozillazine.org/Browser.send_pings.require_same_host for more info."
          },
          {
            "Name": "browser.send_pings.max_per_link",
            "FriendlyName": "Maximum number of links to ping enabled",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "dom.storage.enabled",
            "FriendlyName": "DOM storage enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "The Web Applications 1.0 specification defines a mechanism allowing web pages to store information with a web browser (similar to cookies) called \"client-side session and persistent storage.\" Although use of session storage is subject to a user's cookie preferences, this preference allows it to be disabled entirely. See http://kb.mozillazine.org/Dom.storage.enabled for more info."
          }
        ]
      },
      {
        "Name": "Javascript APIs",
        "Settings": [
          {
            "Name": "dom.battery.enabled",
            "FriendlyName": "Battery API enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Enables the browser to see battery life. See https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager for more info."
          },
          {
            "Name": "dom.telephony.enabled",
            "FriendlyName": "Telephony API enabled",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Enables the browser to make and receive phone calls. See https://wiki.mozilla.org/WebAPI/Security/WebTelephony for more info."
          },
          {
            "Name": "dom.event.clipboardevents.enabled",
            "FriendlyName": "Clipboardevents enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Force interaction from yourself before the browser can look at the clipboard. See https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/dom.event.clipboardevents.enabled for more info."
          },
          {
            "Name": "dom.enable_performance",
            "FriendlyName": "Performance API enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Enables the browser to get information about DNS resolution time, connection setup time, transfer time and some other timing interfaces from ResourceTiming API. See https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI for more info."
          },
          {
            "Name": "dom.indexeddb.enabled",
            "FriendlyName": "Indexed db enabled",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean",
            "Description": "Enables the browser to store data on your pc to enable fast searching. See https://developer.mozilla.org/en-US/docs/IndexedDB for more information."
          },
          {
            "Name": "dom.gamepad.enabled",
            "FriendlyName": "Gamepad enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Enables Gamepad support. Security wise, this can result in USB device id enumeration. See http://www.w3.org/TR/gamepad/ for more info."
          },
          {
            "Name": "dom.vr.enabled",
            "FriendlyName": "Virtual reality devices enabled",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Enables the browser to interact with virtual reality devices. See https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM for more info."
          },
          {
            "Name": "dom.event.contextmenu.enabled",
            "FriendlyName": "Context menu enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Enables the browser to control the rightclick context menu"
          },
          {
            "Name": "dom.broadcastchannel.enabled",
            "FriendlyName": "Broadcast channel enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Enables the browser to broadcast messages to all browsing contextx in the same user agent"
          },
          {
            "Name": "dom.ipc.plugins.enabled",
            "FriendlyName": "Inter process plugins enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Enables the browsers plugins to communicate between processes"
          },
          {
            "Name": "dom.server-events.enabled",
            "FriendlyName": "Server sent events enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Enables the browser to initiate data from server sent events"
          },
          {
            "Name": "dom.vibrator.enabled",
            "FriendlyName": "Screen vibration enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Enables the browser to control vibrate"
          },
          {
            "Name": "dom.webcomponents.enabled",
            "FriendlyName": "Web Components enabled",
            "Values": [
              true,
              true,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Determines if Web Components are enabled or disabled. See https://developer.mozilla.org/en-US/docs/Web/Web_Components for at description of web components."
          },
          {
            "Name": "dom.webnotifications.enabled",
            "FriendlyName": "Used to display desktop notifications to the user. See https://developer.mozilla.org/en/docs/Web/API/notification",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          }
        ]
      }
    ]
  },
  {
    "Name": "Extensions",
    "Categories": [
      {
        "Name": "General",
        "Settings": [
          {
            "Name": "security.xpconnect.plugin.unrestricted",
            "FriendlyName": "Unrestricted xpconnect enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "plugin.state.flash",
            "FriendlyName": "Ask to activate Flash",
            "Values": [
              2,
              0,
              0
            ],
            "ValueType": "Int32",
            "Description": "0: never activate, 1: ask to activate, 2: always activate"
          },
          {
            "Name": "plugins.click_to_play",
            "FriendlyName": "Click to play enabled",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "plugins.update.notifyuser",
            "FriendlyName": "Notify user on updates",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean",
            "Description": "See https://wiki.mozilla.org/Firefox3.6/Plugin_Update_Awareness_Security_Review for more info."
          },
          {
            "Name": "extensions.update.enabled",
            "FriendlyName": "Autoupdate extensions",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "extensions.blocklist.enabled",
            "FriendlyName": "Extensions blocklist enabled",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          }
        ]
      }
    ]
  },
  {
    "Name": "Features",
    "Categories": [
      {
        "Name": "General",
        "Settings": [
          {
            "Name": "javascript.options.asmjs",
            "FriendlyName": "ASM.js enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "gfx.font_rendering.opentype_svg.enabled",
            "FriendlyName": "OpenType SVG enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "gfx.downloadable_fonts.enabled",
            "FriendlyName": "Download remote fonts enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "webgl.disabled",
            "FriendlyName": "WebGL disabled",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "pdfjs.disabled",
            "FriendlyName": "PDF.js disabled",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "pdfjs.enablewebgl",
            "FriendlyName": "WebGL for PDF.js enabled",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.pocket.enabled",
            "FriendlyName": "Pocket enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.selfsupport.url",
            "FriendlyName": "Browser selfsupport URL",
            "Values": [
              "https://self-repair.mozilla.org/%LOCALE%/repair",
              "",
              ""
            ],
            "ValueType": "String"
          },
          {
            "Name": "loop.enabled",
            "FriendlyName": "Loop enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "app.update.auto",
            "FriendlyName": "Autoupdate Firefox enabled",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.casting.enabled",
            "FriendlyName": "Casting enabled",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "geo.enabled",
            "FriendlyName": "Geolocation enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Websites that use location-aware browsing will ask where you are in order to bring you more relevant information, or to save you time while searching. See http://www.mozilla.org/en-US/firefox/geolocation/"
          },
          {
            "Name": "geo.wifi.uri",
            "FriendlyName": "Geolocation URL to visit when using WiFi",
            "Values": [
              "https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_API_KEY%",
              "",
              ""
            ],
            "ValueType": "String",
            "Description": "The URL to use when trying to use geolocation API with WiFi"
          },
          {
            "Name": "beacon.enabled",
            "FriendlyName": "Beacon enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "The navigator.sendBeacon() method can be used to asynchronously transfer small HTTP data from the User Agent to a web server. See https://w3c.github.io/beacon/ for more info."
          },
          {
            "Name": "device.sensors.enabled",
            "FriendlyName": "Device sensor enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Master toggle to enable or disable all device sensors. See https://wiki.mozilla.org/Sensor_API for more info."
          },
          {
            "Name": "camera.control.face_detection.enabled",
            "FriendlyName": "Camera face detection enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Enable or disable face detection."
          }
        ]
      },
      {
        "Name": "Safebrowsing",
        "Settings": [
          {
            "Name": "toolkit.telemetry.enabled",
            "FriendlyName": "Telemetry enabled",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "datareporting.healthreport.uploadenabled",
            "FriendlyName": "Uploading of health reports enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "datareporting.healthreport.service.enabled",
            "FriendlyName": "Health report service enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl.errorreporting.enabled",
            "FriendlyName": "Report SSL errors",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl.errorreporting.automatic",
            "FriendlyName": "Automatically submit SSL error reports",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "experiments.enabled",
            "FriendlyName": "Experiments enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.polaris.enabled",
            "FriendlyName": "Polaris enabled",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "privacy.trackingprotection.enabled",
            "FriendlyName": "Privacy protection enabled",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "privacy.donottrackheader.enabled",
            "FriendlyName": "Do not track header enabled",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          }
        ]
      }
    ]
  },
  {
    "Name": "Media",
    "Categories": [
      {
        "Name": "Codecs",
        "Settings": [
          {
            "Name": "media.wave.enabled",
            "FriendlyName": "Wave enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "media.webm.enabled",
            "FriendlyName": "WebM enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "media.webvtt.enabled",
            "FriendlyName": "WebVVT enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "media.opus.enabled",
            "FriendlyName": "Opus enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "media.ogg.enabled",
            "FriendlyName": "OGG enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "media.raw.enabled",
            "FriendlyName": "RAW enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          }
        ]
      },
      {
        "Name": "General",
        "Settings": [
          {
            "Name": "media.navigator.enabled",
            "FriendlyName": "Media Navigator enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "The Media Navigator is related to the mozGetUserMedia() function call. See https://wiki.mozilla.org/Media/getUserMedia and https://developer.mozilla.org/en-US/docs/Web/API/Navigator for more info."
          },
          {
            "Name": "media.peerconnection.enabled",
            "FriendlyName": "PeerConnection (WebRTC) enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Control if WebRTC is turned on or off. WebRTC can be misused to expose the internal network IP address. The setting is related to the mozRTCPeerConnection() function call. Test WebRTC here http://mozilla.github.io/webrtc-landing/"
          },
          {
            "Name": "media.webspeech.recognition.enable",
            "FriendlyName": "Webspeech recognition enabled",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "This setting is part of the Web Speech API and enables the use of speech recognition on websites. See https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html for more info."
          },
          {
            "Name": "media.webspeech.synth.enabled",
            "FriendlyName": "Webspeech synthesis enabled",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "This setting is part of the Web Speech API and enables the use of speech synthesis on websites. See https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html for more info."
          },
          {
            "Name": "media.getusermedia.screensharing.enabled",
            "FriendlyName": "Screensharing enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Enable or disable screensharing using WebRTC. See https://www.webrtc-experiment.com/RTCMultiConnection/screen-sharing.html for more info."
          }
        ]
      }
    ]
  },
  {
    "Name": "Misc",
    "Categories": [
      {
        "Name": "General",
        "Settings": [
          {
            "Name": "browser.search.defaultenginename",
            "FriendlyName": "Default search engine",
            "Values": [
              "chrome://browser-region/locale/region.properties",
              "DuckDuckGo",
              "DuckDuckGo"
            ],
            "ValueType": "String"
          },
          {
            "Name": "clipboard.autocopy",
            "FriendlyName": "Clipboard autocopy",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "In Linux and some UNIX-like platforms, selecting text will automatically copy the contents of the selection to the clipboard. Mozilla also follows this convention on these platforms. This preference controls that behavior. "
          },
          {
            "Name": "keyword.enabled",
            "FriendlyName": "Keyword enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "When entering information in the Location Bar, Mozilla attempts to convert the information into a usable URI. For example, \"mozilla.org\" is automatically converted to \"http://mozilla.org/\". When Mozilla is unable to discern what URL the user wanted, the information that was entered may be submitted to an Internet Keywords service. This preference determines whether or not to use Internet Keywords."
          },
          {
            "Name": "browser.fixup.alternate.enabled",
            "FriendlyName": "Domain guessing",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "\"Domain Guessing\" enhances the Navigation toolbar's \"Location\" field by guessing other domain names when a user's original request cannot be found. Let us assume that the user's default domain name is \"mcom.com\"."
          },
          {
            "Name": "network.jar.open-unsafe-types",
            "FriendlyName": "Enable Jar: protocol",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Mozilla supports the jar: protocol, which allows the browser to directly load files inside JAR archives (and other files based on ZIP). Unfortunately, this feature can open up cross-site scripting issues on otherwise secure sites, by allowing script content to be loaded inside pages with the same permissions as the page itself. Another bug related to redirects compounded the problem, allowing any site with an open redirect to be compromised the same way, even if it hosted no JAR files. "
          },
          {
            "Name": "security.fileuri.strict_origin_policy",
            "FriendlyName": "Strict origin policy for files",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean",
            "Description": "When local HTML files (e.g., those located on your hard drive) are loaded into the browser, the scripts and links within have restrictions on what they can see and do. Those restrictions are determined by the same-origin policy for local files, which this preference controls."
          },
          {
            "Name": "browser.taskbar.lists.enabled",
            "FriendlyName": "Taskbar list enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.uitour.enabled",
            "FriendlyName": "UI tour enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "social.remote-install.enabled",
            "FriendlyName": "Remote installed of extensions enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "social.toast-notifications.enabled",
            "FriendlyName": "Enable toast notifications (Android)",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "extensions.getaddons.cache.enabled",
            "FriendlyName": "Background metadata checks enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Controls whether background metadata checks are made. "
          }
        ]
      }
    ]
  },
  {
    "Name": "Network",
    "Categories": [
      {
        "Name": "General",
        "Settings": [
          {
            "Name": "network.proxy.socks_remote_dns",
            "FriendlyName": "Use remote DNS with SOCKS",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "network.proxy.type",
            "FriendlyName": "Proxy type",
            "Values": [
              5,
              0,
              0
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "network.negotiate-auth.allow-proxies",
            "FriendlyName": "Allow Kerberos authentication with proxies",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "network.cookie.cookiebehavior",
            "FriendlyName": "Cookie behavior",
            "Values": [
              0,
              1,
              1
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "network.prefetch-next",
            "FriendlyName": "Prefetch enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.search.geoip.url",
            "FriendlyName": "Location services URL",
            "Values": [
              "https://location.services.mozilla.com/v1/country?key=%MOZILLA_API_KEY%",
              "",
              ""
            ],
            "ValueType": "String"
          },
          {
            "Name": "browser.search.suggest.enabled",
            "FriendlyName": "Search suggestions enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.abouthomesnippets.updateurl",
            "FriendlyName": "",
            "Values": [
              "https://snippets.cdn.mozilla.net/%STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/",
              "",
              ""
            ],
            "ValueType": "String"
          },
          {
            "Name": "browser.search.update",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "network.dns.disableipv6",
            "FriendlyName": "IPv6 DNS lookups disabled",
            "Values": [
              false,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "One particular bug that has appeared exists not in Mozilla, but in IPv6-capable DNS servers: an IPv4 address may be returned when an IPv6 address is requested. It is possible for Mozilla to recover from this misinformation, but a significant delay is introduced. This preference globally disable IPv6 DNS lookups"
          }
        ]
      },
      {
        "Name": "Prefetching",
        "Settings": [
          {
            "Name": "media.eme.enabled",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "media.gmp-manager.url",
            "FriendlyName": "",
            "Values": [
              "https://aus4.mozilla.org/update/3/GMP/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml",
              "",
              ""
            ],
            "ValueType": "String"
          },
          {
            "Name": "media.autoplay.enabled",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "media.directshow.enabled",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "media.windows-media-foundation.enabled",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "network.http.speculative-parallel-limit",
            "FriendlyName": "",
            "Values": [
              6,
              0,
              0
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "network.dns.disableprefetch",
            "FriendlyName": "",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "network.predictor.enabled",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          }
        ]
      },
      {
        "Name": "Referer",
        "Settings": [
          {
            "Name": "network.http.sendrefererheader",
            "FriendlyName": "",
            "Values": [
              2,
              1,
              1
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "network.http.referer.spoofsource",
            "FriendlyName": "",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "network.http.sendsecurexsitereferrer",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          }
        ]
      }
    ]
  },
  {
    "Name": "Privacy",
    "Categories": [
      {
        "Name": "General",
        "Settings": [
          {
            "Name": "browser.cache.disk.enable",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.cache.memory.enable",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.cache.disk_cache_ssl",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.cache.offline.enable",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.display.use_document_fonts",
            "FriendlyName": "",
            "Values": [
              1,
              0,
              0
            ],
            "ValueType": "Int32"
          }
        ]
      },
      {
        "Name": "Misc",
        "Settings": [
          {
            "Name": "browser.privatebrowsing.autostart",
            "FriendlyName": "",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "privacy.sanitize.sanitizeonshutdown",
            "FriendlyName": "",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "privacy.clearonshutdown.cache",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "privacy.clearonshutdown.cookies",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "privacy.clearonshutdown.downloads",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "privacy.clearonshutdown.formdata",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "privacy.clearonshutdown.history",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "privacy.clearonshutdown.offlineapps",
            "FriendlyName": "",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "privacy.clearonshutdown.passwords",
            "FriendlyName": "",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "privacy.clearonshutdown.sessions",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "privacy.clearonshutdown.sitesettings",
            "FriendlyName": "",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          }
        ]
      },
      {
        "Name": "Private browsing",
        "Settings": [
          {
            "Name": "places.history.enabled",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "network.cookie.lifetimepolicy",
            "FriendlyName": "",
            "Values": [
              0,
              2,
              2
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "browser.formfill.enable",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.formfill.expire_days",
            "FriendlyName": "",
            "Values": [
              180,
              0,
              0
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "browser.sessionstore.privacy_level",
            "FriendlyName": "",
            "Values": [
              0,
              2,
              2
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "browser.helperapps.deletetempfileonexit",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "signon.remembersignons",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.safebrowsing.enabled",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.safebrowsing.malware.enabled",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.safebrowsing.downloads.enabled",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.safebrowsing.downloads.remote.enabled",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          }
        ]
      }
    ]
  },
  {
    "Name": "Security",
    "Categories": [
      {
        "Name": "General",
        "Settings": [
          {
            "Name": "browser.download.folderlist",
            "FriendlyName": "",
            "Values": [
              1,
              2,
              2
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "browser.download.usedownloaddir",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "layout.css.visited_links_enabled",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.urlbar.autocomplete.enabled",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "signon.autofillforms",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ask_for_password",
            "FriendlyName": "Ask for password",
            "Values": [
              0,
              0,
              0
            ],
            "ValueType": "Int32",
            "Description": "0: Only the first time it's needed, 1: Every time it's needed, 2: Every n minutes, where n is the value in security.password_lifetime."
          },
          {
            "Name": "security.mixed_content.block_active_content",
            "FriendlyName": "Block active mixed content",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.mixed_content.block_display_content",
            "FriendlyName": "Blocked display mixed content",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.csp.experimentalenabled",
            "FriendlyName": "Experimental CSP enabled",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.csp.enable",
            "FriendlyName": "CSP enabled",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          }
        ]
      }
    ]
  },
  {
    "Name": "TLS",
    "Categories": [
      {
        "Name": "Ciphers",
        "Settings": [
          {
            "Name": "security.ssl3.ecdhe_rsa_aes_128_sha",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.ecdhe_ecdsa_aes_128_sha",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.dhe_rsa_aes_128_sha",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.dhe_rsa_aes_256_sha",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.ecdhe_rsa_aes_256_sha",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.ecdhe_ecdsa_aes_256_sha",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.ecdhe_rsa_aes_128_gcm_sha256",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.rsa_aes_128_sha",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.rsa_aes_256_sha",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.rsa_rc4_128_md5",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.rsa_rc4_128_sha",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.ecdhe_ecdsa_rc4_128_sha",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.ecdhe_rsa_rc4_128_sha",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl3.rsa_des_ede3_sha",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          }
        ]
      },
      {
        "Name": "General",
        "Settings": [
          {
            "Name": "security.tls.version.min",
            "FriendlyName": "",
            "Values": [
              1,
              1,
              1
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "security.tls.version.max",
            "FriendlyName": "",
            "Values": [
              3,
              3,
              3
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "security.ssl.warn_missing_rfc5746",
            "FriendlyName": "",
            "Values": [
              1,
              1,
              1
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "network.stricttransportsecurity.preloadlist",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.cert_pinning.enforcement_level",
            "FriendlyName": "",
            "Values": [
              1,
              2,
              2
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "security.ssl.treat_unsafe_negotiation_as_broken",
            "FriendlyName": "",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl.require_safe_negotiation",
            "FriendlyName": "",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.tls.unrestricted_rc4_fallback",
            "FriendlyName": "",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          }
        ]
      },
      {
        "Name": "OCSP",
        "Settings": [
          {
            "Name": "security.ocsp.enabled",
            "FriendlyName": "",
            "Values": [
              1,
              1,
              1
            ],
            "ValueType": "Int32"
          },
          {
            "Name": "security.ocsp.require",
            "FriendlyName": "",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "security.ssl.enable_ocsp_stapling",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          }
        ]
      },
      {
        "Name": "SPDY",
        "Settings": [
          {
            "Name": "network.http.spdy.enabled",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "network.http.spdy.enabled.v3-1",
            "FriendlyName": "",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          }
        ]
      }
    ]
  },
  {
    "Name": "User Interface",
    "Categories": [
      {
        "Name": "Newtab",
        "Settings": [
          {
            "Name": "browser.newtabpage.enabled",
            "FriendlyName": "Newtab page (about:newtab) enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "See https://wiki.mozilla.org/Privacy/Reviews/New_Tab for more info."
          },
          {
            "Name": "browser.newtab.url",
            "FriendlyName": "The URL of the newtab",
            "Values": [
              "about:newtab",
              "about:blank",
              "about:blank"
            ],
            "ValueType": "String",
            "Description": "See https://support.mozilla.org/en-US/kb/new-tab-page-show-hide-and-customize-top-sites#w_how-do-i-turn-the-new-tab-page-off for more info."
          },
          {
            "Name": "browser.newtabpage.enhanced",
            "FriendlyName": "Enable newtab enhanced mode",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.newtab.preload",
            "FriendlyName": "Preload links on newtab",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.newtabpage.directory.ping",
            "FriendlyName": "",
            "Values": [
              "https://tiles.services.mozilla.com/v3/links/",
              "",
              ""
            ],
            "ValueType": "String"
          }
        ]
      },
      {
        "Name": "URLbar",
        "Settings": [
          {
            "Name": "network.idn_show_punycode",
            "FriendlyName": "Show IDN punycode",
            "Values": [
              false,
              true,
              true
            ],
            "ValueType": "Boolean",
            "Description": "Browsers use Punycode to translate international domain names to something the DNS system can understand. Enable this to show the punycode in URLs. See http://kb.mozillazine.org/Network.IDN_show_punycode for more info."
          },
          {
            "Name": "browser.urlbar.autofill",
            "FriendlyName": "Autofill in URLbar enabled",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "Controls autofill in the URLbar. When you have visited a website, it gets stored in history. If you partially enter the name of a recently visited site in the urlbar, it will be autofilled with the closest match."
          },
          {
            "Name": "browser.urlbar.autofill.typed",
            "FriendlyName": "Enable autofill for typed URLs",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean",
            "Description": "When this is set to true it means that only addresses you've manually typed into the urlbar get autofilled. When the preference is set to false then all addresses stored in your history are eligible for autofill."
          },
          {
            "Name": "browser.urlbar.maxrichresults",
            "FriendlyName": "The maximum number of rich search results",
            "Values": [
              12,
              0,
              0
            ],
            "ValueType": "Int32",
            "Description": "Sets the number of rich results. Setting this to 0 effectively disables the Location Bar dropdown entirely. See http://kb.mozillazine.org/Browser.urlbar.maxRichResults for more info."
          },
          {
            "Name": "browser.urlbar.suggest.bookmark",
            "FriendlyName": "Suggest bookmarks in urlbar",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.urlbar.suggest.history",
            "FriendlyName": "Suggest history in urlbar",
            "Values": [
              true,
              false,
              false
            ],
            "ValueType": "Boolean"
          },
          {
            "Name": "browser.urlbar.filter.javascript",
            "FriendlyName": "Filter Javascript from the urlbar",
            "Values": [
              true,
              true,
              true
            ],
            "ValueType": "Boolean"
          }
        ]
      }
    ]
  }
]