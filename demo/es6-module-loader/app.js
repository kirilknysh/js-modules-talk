export const app = {
	init() {
		this.logsContainer = document.getElementById('logs');

		const selector = document.getElementById('modules-selector');
		selector.addEventListener('change', (e) => {
			this.loadModule(e.target.selectedOptions[0].innerHTML);
		});

		this.log('App init-ed!');
	},

	loadModule(moduleName) {
		System.import(`modules/${moduleName}.js`)
			.then((module) => {
				this.log(module.init());
			}, (e) => {
				this.log(`Error loading <b>${moduleName}</b>`);
			});
	},

	log(str) {
		if (this.logsContainer) {
			const line = document.createElement('div');

			line.innerHTML = str;
			this.logsContainer.appendChild(line);
		}
	}
};