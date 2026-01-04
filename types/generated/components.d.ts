import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    aboutbuttom: Schema.Attribute.String;
    aboutdisponibility: Schema.Attribute.String;
    aboutphoto: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    aboutText: Schema.Attribute.Text;
    abouttextshot1: Schema.Attribute.String;
    abouttextshot2: Schema.Attribute.String;
    abouttextshot3: Schema.Attribute.String;
    aboutTitle: Schema.Attribute.String;
  };
}

export interface BlogBlog extends Struct.ComponentSchema {
  collectionName: 'components_blog_blogs';
  info: {
    displayName: 'blog';
  };
  attributes: {
    blogtext: Schema.Attribute.String;
    blogtitle: Schema.Attribute.String;
    bottomcard: Schema.Attribute.String;
    bottonnext: Schema.Attribute.String;
    bottonprev: Schema.Attribute.String;
    numberpage: Schema.Attribute.String;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    buttom1: Schema.Attribute.String;
    button2: Schema.Attribute.String;
    heroDescription: Schema.Attribute.String;
    heroLabel: Schema.Attribute.String;
    heroLive: Schema.Attribute.String;
    heroText: Schema.Attribute.String;
    heroValue: Schema.Attribute.String;
    heroYears: Schema.Attribute.Date;
  };
}

export interface QuickLinksQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_quick_links_quick_links';
  info: {
    displayName: 'quickLinks';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SocialLinksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'blog.blog': BlogBlog;
      'hero.hero': HeroHero;
      'quick-links.quick-links': QuickLinksQuickLinks;
      'social-links.social-links': SocialLinksSocialLinks;
    }
  }
}
