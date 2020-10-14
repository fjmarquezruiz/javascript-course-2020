class DOMHelper {
	static clearEventListeners(element) {
		const clonedEl = element.cloneNode(true);
		element.replaceWith(clonedEl);
		return clonedEl;
	}
	static moveEl(elementID, newDestinationSelector) {
		const element = document.getElementById(elementID);
		const destinationElement = document.querySelector(
			newDestinationSelector
		);
		destinationElement.append(element);
	}
}

class Component {
	constructor(hostElementId, insertBefore = false) {
		if (hostElementId) {
			this.hostElement = document.getElementById(hostElementId);
		} else {
			this.hostElement = document.body;
		}
		this.insertBefore = insertBefore;
	}
	dettach() {
		if (this.element) {
			this.element.remove();
		}
	}
	attach() {
		this.hostElement.insertAdjacentElement(
			this.insertBefore ? 'afterbegin' : 'beforeend',
			this.element
		);
	}
	show() {
		document.body.append(this.element);
	}
}

class Tooltip extends Component {
	constructor(closeNotifierFunction) {
		super();
		this.closeNotifier = closeNotifierFunction;
		this.create();
	}
	closeTooltip = () => {
		this.dettach();
		this.closeNotifier();
	};
	create() {
		console.log('The tooltip....');
		const tooltipEl = document.createElement('div');
		tooltipEl.className = 'card';
		tooltipEl.textContent = 'Dummy';
		tooltipEl.addEventListener('click', this.closeTooltip);
		this.element = tooltipEl;
	}
}

class ProjectItem {
	hasActiveTooltip = false;

	constructor(id, updateProjectLists, type) {
		this.id = id;
		this.updateProjectListsHandler = updateProjectLists;
		this.connectMoreInfoBtn();
		this.connectSwitchBtn(type);
	}

	showMoreInfoHandler() {
		if (this.hasActiveTooltip) {
			return;
		}
		const tooltip = new Tooltip(() => {
			this.hasActiveTooltip = false;
		});
		tooltip.attach();
		this.hasActiveTooltip = true;
	}

	connectMoreInfoBtn() {
		const projectItemEl = document.getElementById(this.id);
		const moreInfoBtn = projectItemEl.querySelector('button:first-of-type');
		moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
	}

	connectSwitchBtn(type) {
		const projectItemEl = document.getElementById(this.id);
		let switchBtn = projectItemEl.querySelector('button:last-of-type');
		switchBtn = DOMHelper.clearEventListeners(switchBtn);
		switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
		switchBtn.addEventListener(
			'click',
			this.updateProjectListsHandler.bind(null, this.id)
		);
	}

	update(updateProjectListFn, type) {
		this.updateProjectListsHandler = updateProjectListFn;
		this.connectSwitchBtn(type);
	}
}

class ProjectList {
	projects = [];
	constructor(type) {
		this.type = type;

		const prjItems = document.querySelectorAll(`#${type}-projects li`);

		for (const prjItem of prjItems) {
			this.projects.push(
				new ProjectItem(
					prjItem.id,
					this.switchProject.bind(this),
					this.type
				)
			);
		}

		console.log(this.projects);
	}

	setSwitchHandlerFunction(switchHandlerFunction) {
		this.switchHandler = switchHandlerFunction;
	}

	addProject(project) {
		console.log(this);
		this.projects.push(project);
		DOMHelper.moveEl(project.id, `#${this.type}-projects ul`);
		project.update(this.switchProject.bind(this), this.type);
	}

	switchProject(projectId) {
		// const projectIndex = this.projects.findIndex((p) => p.id === projectId);
		// this.projects.splice(projectIndex, 1);
		this.switchHandler(this.projects.find((p) => p.id === projectId));
		this.projects = this.projects.filter((p) => p.id !== projectId);
	}
}

class App {
	static init() {
		const activeProjectList = new ProjectList('active');
		const finishedProjectList = new ProjectList('finished');
		activeProjectList.setSwitchHandlerFunction(
			finishedProjectList.addProject.bind(finishedProjectList)
		);
		finishedProjectList.setSwitchHandlerFunction(
			activeProjectList.addProject.bind(activeProjectList)
		);
	}
}

App.init();
