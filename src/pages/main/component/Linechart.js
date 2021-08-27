import { Line, mixins } from 'vue-chartjs';
import zoom from 'chartjs-plugin-zoom';
const { reactiveProp } = mixins;

export default {
	extends: Line,
    mixins: [reactiveProp],
    props: ['options'],
    mounted() {
        this.addPlugin(zoom);
        // this.chartData is created in the mixin
        this.renderChart(this.chartData, this.options);
    }
};