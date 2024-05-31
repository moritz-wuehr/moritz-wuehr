import { r as registerInstance, h, H as Host } from './index-8b4f8b96.js';

const githubVersionSwitcherCss = ".gh-version-switcher select{max-width:196px}";

const GithubVersionSwitcher = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._defaultBranch = 'latest';
    this.stripString = (value) => {
      return value.replace(/[^a-zA-Z0-9-]/g, '');
    };
    this.fetchFromGitHubApi = async (url) => {
      const response = await fetch(url);
      return await response.json();
    };
    this.setCurrentBranch = (branchNames) => {
      const currentUrl = window.location.href;
      const foundBranch = branchNames.find((branch) => currentUrl.includes(branch));
      if (foundBranch) {
        this.currentBranch = foundBranch;
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.setBranches = (data) => {
      const branchNames = data
        .map((branch) => branch.name)
        .filter((branch) => branch !== 'gh-pages' && !branch.includes('dependabot'));
      branchNames.forEach((branch) => {
        const foundGroup = this.groups.find((grp) => branch.startsWith(grp.prefix));
        if (foundGroup) {
          foundGroup.branches.push(branch);
        }
        else {
          this.groups.at(-1).branches.push(branch);
        }
      });
      this.setCurrentBranch(branchNames);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.setTags = (data) => {
      const tagNames = data.map((tag) => tag.name);
      tagNames.forEach((tag) => {
        this.groups[0].branches.push(tag);
      });
      this.setCurrentBranch(tagNames);
    };
    this.owner = undefined;
    this.repo = undefined;
    this.groups = [
      { prefix: 'v', name: 'Versions', branches: [] },
      { prefix: 'test', name: 'Tests', branches: [] },
      { prefix: 'feat', name: 'Features', branches: [] },
      { prefix: 'fix', name: 'Bugfixes', branches: [] },
      { prefix: 'chore', name: 'Chore', branches: [] },
      { prefix: 'docs', name: 'Docs', branches: [] },
      { prefix: 'refactor', name: 'Refactors', branches: [] },
      { prefix: 'style', name: 'Styles', branches: [] },
      { prefix: 'ci', name: 'CI', branches: [] },
      { prefix: 'perf', name: 'Perf', branches: [] },
      { prefix: '', name: 'Other', branches: [] }
    ];
    this.currentBranch = this._defaultBranch;
    this.cleanOwner = undefined;
    this.cleanRepo = undefined;
  }
  get defaultBranch() {
    return this._defaultBranch;
  }
  set defaultBranch(value) {
    this._defaultBranch = value;
  }
  async componentWillLoad() {
    const cOwner = this.stripString(this.owner);
    this.cleanOwner = cOwner;
    const cRepo = this.stripString(this.repo);
    this.cleanRepo = cRepo;
    const branchesData = await this.fetchFromGitHubApi(`https://api.github.com/repos/${cOwner}/${cRepo}/branches`);
    this.setBranches(branchesData);
    const tagsData = await this.fetchFromGitHubApi(`https://api.github.com/repos/${cOwner}/${cRepo}/tags`);
    this.setTags(tagsData);
  }
  // eslint-disable-next-line @stencil-community/own-methods-must-be-private
  handleChange(branch, localOwner, localRepo) {
    if (localOwner && localRepo) {
      const currentUrl = top.location.href;
      const urlPaths = currentUrl.split('?');
      const lastPath = urlPaths[urlPaths.length - 1];
      const isTag = branch.split('.').length === 3 && branch.startsWith('v');
      top.location = `https://${localOwner}.github.io/${localRepo}${this._defaultBranch === branch
        ? ''
        : `${isTag ? '/version' : '/review'}/${branch}`}/?${lastPath}`;
    }
  }
  render() {
    var _a;
    return (h(Host, null, ((_a = this.groups) === null || _a === void 0 ? void 0 : _a.length) > 0 && (h("db-select", { class: "gh-version-switcher", label: "Version", name: "Theme", onDbChange: (event) => this.handleChange(event.target.value, this.cleanOwner, this.cleanRepo) }, h("option", { value: this._defaultBranch, selected: this.currentBranch === this._defaultBranch }, this._defaultBranch), this.groups
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((group) => { var _a; return ((_a = group.branches) === null || _a === void 0 ? void 0 : _a.length) > 0; })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((group) => (h("optgroup", { key: group.name, label: group.name }, group.branches.map((branch, index) => (h("option", { key: `${group.name}-${branch}-${index}`, value: branch, selected: this.currentBranch === branch }, branch))))))))));
  }
};
GithubVersionSwitcher.style = githubVersionSwitcherCss;

export { GithubVersionSwitcher as github_version_switcher };

//# sourceMappingURL=github-version-switcher.entry.js.map