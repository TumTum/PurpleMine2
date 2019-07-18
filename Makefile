# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

install: ## Einmaliger schritt um die node module zu installieren
	@echo "Installiere npm Module"
	@docker run -it --rm -v $$(pwd):/data digitallyseamless/nodejs-bower-grunt:latest npm install

chrome_same_path: ## Für Google Chrome muss die Ordner Stucktur die selbe sein
	@src_code=$$(basename $$(pwd)) &&\
	 chrompfad="Development/www.ldc-ticket.org/themes/PurpleMine2" &&\
	 protect=$$(pwd) &&\
	 if [[ $$protect =~ "www.ldc-ticket.org" ]]; then \
	 	echo; echo "Verzeichnis Stucktur stimmt $$protect"; echo && \
		exit; \
	 else \
		cd ../ &&\
		mkdir -pv $$(dirname $$chrompfad) &&\
		mv $$src_code $$chrompfad &&\
		echo echo "Overrides Path: "$$(pwd)"/Development"  &&\
		echo "Bitte alles nochmal neu öffnen" echo &&\
		cd $$chrompfad; \
	 fi

build: ## Erstellt application.css
	@if [ ! -d node_modules ]; then\
		make install;\
	fi
	@docker run -it --rm -v $$(pwd):/data digitallyseamless/nodejs-bower-grunt:latest grunt default

watch: ## Beobachtet die css Dateien
	@if [ ! -d node_modules ]; then\
		make install;\
	fi
	@read -p "Welches Timestamp hat application.css?111111? " TIME;\
	 docker run -it --rm -v $$(pwd):/data digitallyseamless/nodejs-bower-grunt:latest grunt --style_name=application.css%3F$$TIME watch
