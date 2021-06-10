<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Température"
            type="gradient-red"
            :sub-title="sensorsData.temperature + '°C'"
            icon="fas fa-temperature-low"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span
                class="text-success mr-2"
                v-if="evolutionRate.temperature > 1"
              >
                <i class="fa fa-arrow-up"></i>
                {{ evolutionRate.temperature.toFixed(2) + "%" }}
              </span>
              <span
                class="text-danger mr-2"
                v-if="evolutionRate.temperature < -1"
              >
                <i class="fa fa-arrow-down"></i>
                {{ evolutionRate.temperature.toFixed(2) + "%" }}
              </span>
              <span
                class="text-warning mr-2"
                v-if="
                  evolutionRate.temperature <= 1 &&
                  evolutionRate.temperature >= -1
                "
              >
                <i class="fa fa-arrow-right"></i>
                {{ evolutionRate.temperature.toFixed(2) + "%" }}
              </span>
              <span class="text-nowrap">Depuis hier</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Humidité dans l'air"
            type="gradient-orange"
            :sub-title="sensorsData.air_humidity + '%'"
            icon="fas fa-tint"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span
                class="text-success mr-2"
                v-if="evolutionRate.air_humidity > 1"
              >
                <i class="fa fa-arrow-up"></i>
                {{ evolutionRate.air_humidity.toFixed(2) + "%" }}
              </span>
              <span
                class="text-danger mr-2"
                v-if="evolutionRate.air_humidity < -1"
              >
                <i class="fa fa-arrow-down"></i>
                {{ evolutionRate.air_humidity.toFixed(2) + "%" }}
              </span>
              <span
                class="text-warning mr-2"
                v-if="
                  evolutionRate.air_humidity <= 1 &&
                  evolutionRate.air_humidity >= -1
                "
              >
                <i class="fa fa-arrow-right"></i>
                {{ evolutionRate.air_humidity.toFixed(2) + "%" }}
              </span>
              <span class="text-nowrap">Depuis hier</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Humidité du sol"
            type="gradient-green"
            :sub-title="sensorsData.soil_moisture + '%'"
            icon="fas fa-tint"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span
                class="text-success mr-2"
                v-if="evolutionRate.soil_moisture > 1"
              >
                <i class="fa fa-arrow-up"></i>
                {{ evolutionRate.soil_moisture.toFixed(2) + "%" }}
              </span>
              <span
                class="text-danger mr-2"
                v-if="evolutionRate.soil_moisture < -1"
              >
                <i class="fa fa-arrow-down"></i>
                {{ evolutionRate.soil_moisture.toFixed(2) + "%" }}
              </span>
              <span
                class="text-warning mr-2"
                v-if="
                  evolutionRate.soil_moisture <= 1 &&
                  evolutionRate.soil_moisture >= -1
                "
              >
                <i class="fa fa-arrow-right"></i>
                {{ evolutionRate.soil_moisture.toFixed(2) + "%" }}
              </span>
              <span class="text-nowrap">Depuis hier</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Lumière"
            type="gradient-info"
            :sub-title="sensorsData.light + ' lux'"
            icon="fas fa-cloud-sun"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2" v-if="evolutionRate.light > 1">
                <i class="fa fa-arrow-up"></i>
                {{ evolutionRate.light.toFixed(2) + "%" }}
              </span>
              <span class="text-danger mr-2" v-if="evolutionRate.light < -1">
                <i class="fa fa-arrow-down"></i>
                {{ evolutionRate.light.toFixed(2) + "%" }}
              </span>
              <span
                class="text-warning mr-2"
                v-if="evolutionRate.light <= 1 && evolutionRate.light >= -1"
              >
                <i class="fa fa-arrow-right"></i>
                {{ evolutionRate.light.toFixed(2) + "%" }}
              </span>
              <span class="text-nowrap">Depuis hier</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-8 mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <template v-slot:header>
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-light text-uppercase ls-1 mb-1">Module #1</h6>
                  <h5 class="h3 text-white mb-0">Température</h5>
                </div>
                <div class="col">
                  <ul class="nav nav-pills justify-content-end">
                    <li class="nav-item mr-2 mr-md-0">
                      <a
                        class="nav-link py-2 px-3"
                        href="#"
                        :class="{ active: bigLineChart.activeIndex === 0 }"
                        @click.prevent="initBigChart(0)"
                      >
                        <span class="d-none d-md-block">Aujourd'hui</span>
                        <span class="d-md-none">M</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link py-2 px-3"
                        href="#"
                        :class="{ active: bigLineChart.activeIndex === 1 }"
                        @click.prevent="initBigChart(1)"
                      >
                        <span class="d-none d-md-block">Semaine</span>
                        <span class="d-md-none">W</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
            <div class="chart-area">
              <canvas :height="350" :id="temperatureChartID"></canvas>
            </div>
          </card>
        </div>

        <div class="col-xl-4">
          <card header-classes="bg-transparent">
            <template v-slot:header>
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-muted ls-1 mb-1">Module #1</h6>
                  <h5 class="h3 mb-0">Jardin de mon appartement</h5>
                </div>
              </div>
            </template>
            <span class="h6 surtitle text-muted">
              <timeago :datetime="sensorsData.date"></timeago>
            </span>
            <div class="h1 text-success">Connecté</div>
            <base-button block type="default" icon="fas fa-sync-alt">
              Mettre à jour
            </base-button>
            <template v-slot:footer>
              <div class="row">
                <div class="col">
                  <base-button block type="secondary" icon="fas fa-list">
                    Liste des modules
                  </base-button>
                </div>
                <div class="col">
                  <base-button block type="secondary" icon="fas fa-plus">
                    Ajouter
                  </base-button>
                </div>
              </div>
            </template>
          </card>
        </div>
      </div>
      <!-- End charts-->

      <!--Tables-->
      <div class="row mt-5">
        <div class="col-xl-8 mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <template v-slot:header>
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-muted ls-1 mb-1">Module #1</h6>
                  <h5 class="h3 mb-0">Jardin de mon appartement</h5>
                </div>
              </div>
            </template>
            <span class="h6 surtitle text-muted">
              <timeago :datetime="sensorsData.date"></timeago>
            </span>
            <div class="h1">État de l'arrosage : à l'arret</div>
            <template v-slot:footer>
              <base-button block type="success" icon="fas fa-water">
                Lancer l'arrosage manuellement
              </base-button>
            </template>
          </card>
        </div>
        <div class="col-xl-4">
          <social-traffic-table></social-traffic-table>
        </div>
      </div>
      <!--End tables-->
    </div>
  </div>
</template>
<script>
// Charts
import Chart from "chart.js";

import SocialTrafficTable from "./Dashboard/SocialTrafficTable";
import axios from "axios";
import store from "../store/index";
let chart;

export default {
  components: {
    SocialTrafficTable,
  },
  data() {
    return {
      sensorsData: {
        soil_moisture: null,
        air_humidity: null,
        temperature: null,
        light: null,
      },
      sensorsStats: null,
      evolutionRate: {
        soil_moisture: 0,
        air_humidity: 0,
        temperature: 0,
        light: 0,
      },
      temperatureChartID: "salesChart",
      bigLineChart: {
        allData: [
          [20.1, 20.5, 20, 20.2, 20.6, 20.1, 21.5, 22, 22.4],
          [22, 21.5, 21.3, 21.1, 22, 23, 22, 21],
        ],
        activeIndex: 0,
      },
    };
  },
  computed: {
    getEvolutionRate(value1, value2) {
      return ((value2 - value1) / value1) * 100;
    },
  },
  methods: {
    initSensorsData: function () {
      axios
        .post("/sensors/dfrobot_sht20/latest", {
          userId: store.getters.getId,
        })
        .then((res) => {
          this.sensorsData.air_humidity = res.data.hum.toFixed(1);
          this.sensorsData.temperature = res.data.temp.toFixed(1);
          this.sensorsData.date = res.data.date;
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
      axios
        .post("/sensors/dfrobot_sen0308/latest", {
          userId: store.getters.getId,
        })
        .then((res) => {
          this.sensorsData.soil_moisture = res.data.hum.toFixed(1);
        });
      axios
        .post("/sensors/adafruit_tsl2591/latest", {
          userId: store.getters.getId,
        })
        .then((res) => {
          this.sensorsData.light = res.data.light;
        });
    },
    initSensorsStats: function () {
      axios
        .post("/stats", {
          userId: store.getters.getId,
        })
        .then((res) => {
          this.sensorsStats = res.data;
          this.evolutionRate.air_humidity =
            ((this.sensorsData.air_humidity - res.data.air_humidity_average) /
              res.data.air_humidity_average) *
            100;
          this.evolutionRate.soil_moisture =
            ((this.sensorsData.soil_moisture - res.data.soil_moisture_average) /
              res.data.soil_moisture_average) *
            100;
          this.evolutionRate.temperature =
            ((this.sensorsData.temperature - res.data.temperature_average) /
              res.data.temperature_average) *
            100;
          this.evolutionRate.light =
            ((this.sensorsData.light - res.data.light_average) /
              res.data.light_average) *
            100;
        });
    },
    initBigChart(index) {
      chart.destroy();
      chart = new Chart(
        document.getElementById(this.temperatureChartID).getContext("2d"),
        {
          type: "line",
          data: {
            labels: [
              "Lundi",
              "Mardi",
              "Mercredi",
              "Jeudi",
              "Vendredi",
              "Samedi",
              "Dimanche",
            ],
            datasets: [
              {
                label: "Performance",
                tension: 0.4,
                borderWidth: 4,
                borderColor: "#5e72e4",
                pointRadius: 0,
                backgroundColor: "transparent",
                data: this.bigLineChart.allData[index],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            tooltips: {
              enabled: true,
              mode: "index",
              intersect: false,
            },
            scales: {
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    padding: 0,
                    fontColor: "#8898aa",
                    fontSize: 13,
                    fontFamily: "Open Sans",
                  },
                },
              ],
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    padding: 10,
                    fontColor: "#8898aa",
                    fontSize: 13,
                    fontFamily: "Open Sans",
                  },
                },
              ],
            },
            layout: {
              padding: 0,
            },
          },
        }
      );
      this.bigLineChart.activeIndex = index;
    },
  },
  mounted() {
    this.initSensorsData();
    this.initSensorsStats();
    chart = new Chart(
      document.getElementById(this.temperatureChartID).getContext("2d"),
      {
        type: "line",
        data: {
          labels: [
            "15h55",
            "16h00",
            "16h05",
            "16h10",
            "16h15",
            "16h20",
            "16h25",
            "16h30",
          ],
          datasets: [
            {
              label: "Performance",
              tension: 0.4,
              borderWidth: 4,
              borderColor: "#5e72e4",
              pointRadius: 0,
              backgroundColor: "transparent",
              data: this.bigLineChart.allData[0],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
          },
          scales: {
            yAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.0)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 0,
                  fontColor: "#8898aa",
                  fontSize: 13,
                  fontFamily: "Open Sans",
                },
              },
            ],
            xAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.0)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 10,
                  fontColor: "#8898aa",
                  fontSize: 13,
                  fontFamily: "Open Sans",
                },
              },
            ],
          },
          layout: {
            padding: 0,
          },
        },
      }
    );
  },
};
</script>
<style></style>
