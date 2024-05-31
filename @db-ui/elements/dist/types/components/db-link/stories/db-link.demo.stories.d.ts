declare const _default: {
  title: string;
  id: string;
  component: string;
  parameters: {
    viewMode: string;
  };
  argTypes: {
    text: {
      control: string;
      defaultValue: string;
      name: string;
    };
    href: {
      control: string;
    };
    hreflang: {
      control: string;
    };
    icon: {
      control: {
        options: string[];
        type: string;
      };
      defaultValue: string;
    };
    media: {
      control: string;
    };
    rel: {
      control: {
        options: string[];
        type: string;
      };
      defaultValue: string;
    };
    target: {
      control: {
        options: string[];
        type: string;
      };
      defaultValue: string;
    };
    type: {
      control: string;
    };
  };
};
export default _default;
export declare const LiveDemo: ({ text, href, hreflang, icon, media, rel, target, type }: {
  text: any;
  href: any;
  hreflang: any;
  icon: any;
  media: any;
  rel: any;
  target: any;
  type: any;
}) => string;
