#fact

Configure the [[Caddy]] by [[Domain Name System|Domain]] through [[Matcher|Matchers]]


```
# -----------------------

# A domain block

# -----------------------

*.local-address.io { --this is a domain block

	tls internal --uses the internal CA
	
	@api host api.local-address.io --defines a matcher, for the address
	handle @api { --for this matcher, do this
		reverse_proxy 127.0.0.1:4000 --this rule defines the routing with IPV4
	}
	
	@app host app.local-address.io
	handle @app {
		reverse_proxy [::1]:3000 { --routing rule with IPV6
			header_up Host app.local-address.io  --rule for setting the cannonic name
		}
	}
}


# -----------------------

# Another domain block

# -----------------------

*.local-address.dev {

	@app host app.local-address.dev
	handle @app {
		reverse_proxy [::1]:3000 {
			header_up Host app.local-address.io --redirects to io domains
		}
	}
	
	# fallback to 8080 for other .dev services
	handle {
		reverse_proxy 127.0.0.1:8080
	}
}
