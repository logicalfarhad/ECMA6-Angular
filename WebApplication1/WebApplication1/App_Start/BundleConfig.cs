using System.Web.Optimization;

namespace WebApplication1
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular.js",
                "~/Scripts/angular-ui-router.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/app/app.js",
                "~/Scripts/app/config.js",
                "~/Scripts/app/controllers/preferenceController.js",
                "~/Scripts/app/controllers/orderController.js",
                "~/Scripts/app/controllers/requestController.js",
                "~/Scripts/app/controllers/favoriteController.js"
                ));
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/Site.css"));
        }
    }
}
