<template>
  <div id="app">
    <div v-bind:class="{ show: onProcess }" id="preloader"><div class="spinner"><div class="spinner-a"></div><div class="spinner-b"></div></div></div>
    <div class="content-body" style="margin:0;">
      <div class="container">
        <div class="row page-titles">
          <div class="col-sm-6 p-md-0">
            <div class="breadcrumb-range-picker">
              <span class="d-none d-sm-inline-block mr-2"><i class="far fa-chart-bar"></i></span>
              <span>Total Kasus COVID-19 di <b>Dunia</b>, {{ date | dateParse('YYYY.MM.DD') | dateFormat('DD MMM YYYY') }}</span>
            </div>
          </div>
          <div class="col-sm-6 d-none d-sm-flex p-md-0 justify-content-sm-end mt-2 mt-sm-0">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="javascript:void(0)">COVID-19</a></li>
              <li class="breadcrumb-item active"><a href="javascript:void(0)">Dunia</a></li>
            </ol>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="card" id="user-activity">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <div class="icon-wrap primary">
                      <i class="mdi mdi-medical-bag"></i>
                    </div>
                    <h4>{{ dataTotal.total_cases }}</h4>
                    <span class="type-name">Kasus</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" role="tab">
                    <div class="icon-wrap danger">
                      <i class="mdi mdi-bottle-tonic-plus-outline"></i>
                    </div>
                    <h4>{{ dataTotal.total_deaths }}</h4>
                    <span class="type-name">Meninggal</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" role="tab">
                    <div class="icon-wrap success">
                      <i class="mdi mdi-shield-refresh-outline"></i>
                    </div>
                    <h4>{{ dataTotal.total_recovered }}</h4>
                    <span class="type-name">Sembuh</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row page-titles">
          <div class="col-sm-6 p-md-0">
            <div class="breadcrumb-range-picker">
              <span class="d-none d-sm-inline-block mr-2"><i class="far fa-chart-bar"></i></span>
              <span>Total Kasus COVID-19 di <b>Indonesia</b>, {{ date | dateParse('YYYY.MM.DD') | dateFormat('DD MMM YYYY') }}</span>
            </div>
          </div>
          <div class="col-sm-6 d-none d-sm-flex p-md-0 justify-content-sm-end mt-2 mt-sm-0">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="javascript:void(0)">COVID-19</a></li>
              <li class="breadcrumb-item active"><a href="javascript:void(0)">Indonesia</a></li>
            </ol>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="card" id="user-activity">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <div class="icon-wrap primary">
                      <i class="mdi mdi-medical-bag"></i>
                    </div>
                    <h4><span v-if="indCase"> {{ indCaseTotal.cases }}</span></h4>
                    <span class="type-name">Kasus</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" role="tab">
                    <div class="icon-wrap danger">
                      <i class="mdi mdi-bottle-tonic-plus-outline"></i>
                    </div>
                    <h4><span v-if="indCase"> {{ indCaseTotal.deaths }}</span></h4>
                    <span class="type-name">Meninggal</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" role="tab">
                    <div class="icon-wrap success">
                      <i class="mdi mdi-shield-refresh-outline"></i>
                    </div>
                    <h4><span v-if="indCase"> {{ indCaseTotal.total_recovered }}</span></h4>
                    <span class="type-name">Sembuh</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row page-titles">
          <div class="col-sm-6 p-md-0">
            <div class="breadcrumb-range-picker">
              <span class="d-none d-sm-inline-block mr-2"><i class="far fa-chart-bar"></i></span>
              <span>Daftar Negara Terdampak, {{ date | dateParse('YYYY.MM.DD') | dateFormat('DD MMM YYYY') }}</span>
            </div>
          </div>
          <div class="col-sm-6 d-none d-sm-flex p-md-0 justify-content-sm-end mt-2 mt-sm-0">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="javascript:void(0)">COVID-19</a></li>
              <li class="breadcrumb-item active"><a href="javascript:void(0)">Dunia</a></li>
            </ol>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title d-none d-sm-block">Daftar Negara</h4>
                <div class="search-container">
                  <input id="search" type="text" class="form-control" placeholder="Cari" v-model="searchQuery">
                </div>
              </div>
              <div class="card-body pt-2">
                <div class="table-data">
                  <table class="table header-border table-hover verticle-middle" id="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Negara</th>
                        <th>Kasus</th>
                        <th>Meninggal</th>
                        <th>Sembuh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in resultQuery" v-bind:key="item.country_name">
                        <td width="10%">{{ index + 1 }}</td>
                        <td width="30%" class="text-primary"><a class="link" href="#">{{ item.country_name }}</a></td>
                        <td width="20%">{{ item.cases }}</td>
                        <td width="20%">{{ item.deaths }}</td>
                        <td width="20%">{{ item.total_recovered }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="copyright">
        <p>&copy; 2020 by <a href="https://www.instagram.com/gempong_/" target="_blank">Gempong</a></p>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import axios from 'axios'
  const BASE_URL = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus'
  
  export default {
    data() {
      return {
        onProcess: false,
        dataTotal: [],
        dataCovid: [],
        indCase: [],
        indCaseTotal: [],
        searchQuery: null,
        date: ''
      }
    },
    mounted(){
      this.getTotal();
      this.getCountry();
    },
    computed: {
      resultQuery(){
        if(this.searchQuery){
        return this.dataCovid.countries_stat.filter((item)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => item.country_name.toLowerCase().includes(v))
        })
        }else{
          return this.dataCovid.countries_stat;
        }
      },
    },
    methods: {
      getTotal: function (){
        this.onProcess = true;
        axios.get(`${BASE_URL}/worldstat.php`, {
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
            'x-rapidapi-key': '777f8949f5mshca3cd68e4573b9bp1ae370jsne09b8783112a'
          }
        })
        .then(response => {
          this.dataTotal = response.data
          this.date = response.data.statistic_taken_at
          this.onProcess = false;
        })
      },
      getCountry: function (){
        this.onProcess = true;
        axios.get(`${BASE_URL}/cases_by_country.php?filter[countries_stat]=Indonesia`, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "777f8949f5mshca3cd68e4573b9bp1ae370jsne09b8783112a"
          },
          body: {
            filter: {country_name:"Indonesia"},
          }
        })
        .then(response => {
          const countrys = response.data.countries_stat
          this.dataCovid = response.data
          
          this.indCase = countrys.filter(country => country.country_name == 'Indonesia')
          this.indCaseTotal = this.indCase[0]
          
          this.onProcess = false
        })
      },
    }
  };
</script>
<style>
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
      background: transparent ;
  }

  .table-responsive{
    max-height:500px;
  }
  #preloader{
    opacity: 0;
    visibility : hidden;
    transition: ease .5s;
    z-index: 9999 !important;
  }
  #preloader.show{
    opacity: 1;
    visibility : visible;
  }
  .page-titles .breadcrumb .breadcrumb-item + .breadcrumb-item:before{
    content: '\f105' !important;
    font-family: 'Font Awesome 5 Free' !important;
    font-weight: 900;
    font-size: 10px !important;
  }
  .content-body .container {
    padding: 50px 15px 0px;
  }

  .footer{
    background:#fff;
    padding: 0.9375rem;
    text-align:center;
  }

  .footer p{
    margin: 0;
  }

  .table-data{
    max-height: 500px;
    overflow: scroll;
  }

  @media only screen and (max-width: 980px){
    .search-container{
      width : 100%;
    }

    .table-data table{
      min-width : 500px;
    }
  }
</style>
