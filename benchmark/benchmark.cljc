(ns benchmark (:require [clojure.spec.alpha :as s]))
(s/def ::x-coord int?)
(s/def ::y-coord int?)
(s/def ::point (s/keys :req-un [::x-coord]
                       :opt-un [::y-coord]))

(s/def ::nested-point (s/keys :req-un [::point]))

(s/def ::nested-nested-point (s/keys :req-un [::nested-point]))

(time (dotimes [_ 10000000] (s/valid? ::nested-nested-point  {:nested-point {:point {:x-coord 2 :y-coord 3}}})))