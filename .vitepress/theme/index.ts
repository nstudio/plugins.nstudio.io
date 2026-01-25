import DefaultTheme from 'vitepress/theme';
import './style.css';
import PluginsHome from './PluginsHome.vue';
import NChartsHome from './NChartsHome.vue';
import ChartShowcase from './components/ChartShowcase.vue';
import FeatureCard from './components/FeatureCard.vue';
import CodePreview from './components/CodePreview.vue';
import FrameworkTabs from './components/FrameworkTabs.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PluginsHome', PluginsHome);
    app.component('NChartsHome', NChartsHome);
    app.component('ChartShowcase', ChartShowcase);
    app.component('FeatureCard', FeatureCard);
    app.component('CodePreview', CodePreview);
    app.component('FrameworkTabs', FrameworkTabs);
  },
};
