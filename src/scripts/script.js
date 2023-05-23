import { robustFeaturesSelector, robustFeaturesSelectorMobile } from './featuresSelector.js'
import { heartLoop } from './heartLoop.js'
import { phoneVideoShowcase } from './phoneVideoShowcase.js'
import { intersectionObserverAnim } from './pageIntersectionObservers.js'
import { mobileOverlay } from './mobileOverlay.js'

/*Load functions into page*/
phoneVideoShowcase()
heartLoop()
intersectionObserverAnim()
robustFeaturesSelector()
robustFeaturesSelectorMobile()
mobileOverlay()