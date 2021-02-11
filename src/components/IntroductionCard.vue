<template>
  <v-row>
    <v-col cols="12">
      <v-card class="parent-card">
        <div class="top-row">
          <v-img
            class="elevation-12 profile-picture"
            height="128"
            aspect-ratio="1"
            width="128"
            src="../assets/kala.jpg"
          ></v-img>
          <v-list-item-title class="title-font"
            >Johannes Martikkala</v-list-item-title
          >
          <v-spacer />
          <a href="https://www.linkedin.com/in/martikkala/">
            <v-img
              src="../assets/linkedin.png"
              height="128"
              aspect-ratio="1"
              width="128"
            >
            </v-img>
          </a>
          <a href="https://twitter.com/Kalaztaja">
            <v-img
              src="../assets/twitter.png"
              height="128"
              aspect-ratio="1"
              width="128"
            >
            </v-img>
          </a>
        </div>
        <div class="flex-text">
          <v-card-text
            class="text-font left-text"
            style="backgroundColor: #2a2a2a"
          >
            This virtual CV was done to showcase quickly about different
            technologies and projects I have taken part of. This project was
            made in 16 hours over the course of two days. Every part of the
            program was done by hand and without outside help.
          </v-card-text>
          <v-card-text right>
            <v-timeline align-top dense>
              <v-timeline-item
                v-for="event in timelineEvents"
                :key="event.time"
                :color="event.color"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ event.title }}</strong> - {{ event.time }}
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IntroductionCard',
  data() {
    return {
      timelineEvents: [
        {
          title: 'Started university',
          time: '08/2016',
          color: 'yellow'
        },
        {
          title: 'Course assistant',
          time: '05/2018-05/2019',
          color: 'purple'
        },
        {
          title: 'Insta Digital - Software developer',
          time: '05/2019',
          color: 'blue'
        },
        {
          title: 'Bachelor degree',
          time: '01/2020',
          color: 'yellow'
        },
        {
          title: 'Left Insta Digital',
          time: '12/2020',
          color: 'blue'
        }
      ]
    };
  }
};
</script>

<style scoped>
.profile-picture {
  margin-left: 1em;
}
.title-font {
  font-weight: bold;
  font-size: 2em;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 1em;
}
.top-row {
  display: flex;
  flex-direction: row;
  padding: 1em 0em 1em 0.5em;
}
.text-font {
  font-size: 1.2em;

  font-weight: 300;
}
.flex-text {
  display: flex;
  flex-direction: row;
}
.left-text {
  margin-left: 1em;
}
.parent-card {
  padding-bottom: 20px;
}
</style>
