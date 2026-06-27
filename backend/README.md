## Deployment
### Boot recipe

```yaml
source: clear
features:
  - go
nginx:
  root: public_html/public
  passenger:
    enabled: on
    app_root: /public_html/public
    app_start_command: env PORT=$PORT ./app
    app_type: generic
```
