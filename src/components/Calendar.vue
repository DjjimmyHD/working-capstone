<template>
  <div class="table-divs" id="calendarBody">
    <div class="row">
      <div class="day">0</div>
      <div class="day">1</div>
      <div class="day">2</div>
      <div class="day">3</div>
      <div class="day">4</div>
      <div class="day">5</div>
      <div class="day">6</div>
    </div>
    <div class="row">
      <div class="day">7</div>
      <div class="day">8</div>
      <div class="day">9</div>
      <div class="day">10</div>
      <div class="day">11</div>
      <div class="day">12</div>
      <div class="day">13</div>
    </div>
    <div class="row">
      <div class="day">14</div>
      <div class="day">15</div>
      <div class="day">16</div>
      <div class="day">17</div>
      <div class="day">18</div>
      <div class="day">19</div>
      <div class="day">20</div>
    </div>
    <div class="row">
      <div class="day">21</div>
      <div class="day">22</div>
      <div class="day">23</div>
      <div class="day">24</div>
      <div class="day">25</div>
      <div class="day">26</div>
      <div class="day">27</div>
    </div>
    <div class="row">
      <div class="day">28</div>
      <div class="day">29</div>
      <div class="day">30</div>
      <div class="day">31</div>
      <div class="day">32</div>
      <div class="day">33</div>
      <div class="day">34</div>
    </div>
  </div>
</template>

<script>

export default {
name: 'calendar',
data () {
  return {


  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  clear: left;
}

/* All 'day' elements have these styes in common */
.day {
  height: 97px;
  background: #cccccc;
  border: 1px solid #000;
  box-sizing: border-box;
}

/* use display:table and ilk */
.table-divs {
  display: table;
  width:100%;
  max-width: 97px * 7;

  .row {
    display:table-row;
  }

  .day {
    display: table-cell;
    width: 97px;
  }
}

/* float and wrap divs */
.floated-divs {
  .day {
    width: (100% / 7);
    max-width: 97px;
    float: left;

    &:nth-child(7n+1) {
      clear:left;
    }
  }
}

/* flexbox! But <100% browser support (IE old) */
.flex-divs {
  width:100%;
  max-width: 97px * 7;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  .day {
    display: flex;
    flex: 0 1 (100% / 7);
  }
}

</style>
