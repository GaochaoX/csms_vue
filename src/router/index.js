import Vue from "vue";
import Router from "vue-router";
import Staff from "@/components/staff";
import Sale from "@/components/sale";
import Branch from "@/components/branch";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "Staff",
            component: Staff
        },

        {
            path: "/mall",
            name: "branch",
            component: Branch
        },
        {
            path: "/sale",
            name: "sale",
            component: Sale
        }
    ]
});