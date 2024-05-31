export declare class GithubVersionSwitcher {
  private _defaultBranch;
  get defaultBranch(): string;
  set defaultBranch(value: string);
  /**
   * Provides the owner of the repo
   */
  owner: string;
  /**
   * Provides the name of the repo
   */
  repo: string;
  groups: {
    prefix: string;
    name: string;
    branches: any[];
  }[];
  currentBranch: string;
  cleanOwner: any;
  cleanRepo: any;
  private stripString;
  private fetchFromGitHubApi;
  private setCurrentBranch;
  private setBranches;
  private setTags;
  componentWillLoad(): Promise<void>;
  handleChange(branch: string, localOwner: string, localRepo: string): void;
  render(): any;
}
