package expo.modules.nothing.glyph

import android.content.ComponentName
import android.util.Log
import com.nothing.ketchum.Common
import com.nothing.ketchum.GlyphException
import com.nothing.ketchum.GlyphFrame
import com.nothing.ketchum.GlyphManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

val TAG = ExpoNothingGlyphProgressInterface::class.java.simpleName

class ExpoNothingGlyphModule : Module() {

  private var isGlyphManagerReady: Boolean = false
  private val glyphManager: GlyphManager
    get () {
    val manager = GlyphManager.getInstance(appContext.currentActivity?.applicationContext)
    manager.init(mCallback)
    return manager
  }

  private val mCallback: GlyphManager.Callback
    get() = object : GlyphManager.Callback {
      override fun onServiceConnected(p0: ComponentName?) {
        isGlyphManagerReady = true
        if (Common.is20111()) glyphManager.register(Common.DEVICE_20111)
        if (Common.is22111()) glyphManager.register(Common.DEVICE_22111)
        try {
          glyphManager.openSession()
        } catch (e: GlyphException) {
          Log.e(TAG, e.message ?: "")
        }
      }

      override fun onServiceDisconnected(p0: ComponentName?) {
        isGlyphManagerReady = false
        glyphManager.closeSession()
      }

    }

  private val doesDeviceHaveGlyphCapabilities: Boolean
    get() = Common.is22111() || Common.is20111()
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {



    //    private var
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoNothingGlyphInterface')` in JavaScript.
    Name("ExpoNothingGlyphModule")

    Function("displayProgress") { options: ExpoNothingGlyphProgressInterface ->
      println("Enter function")
      val cycle = options.cycle
      val progress = options.progress.minMax(1, 99)
      println("Cycle $cycle, progress: $progress")
      if (doesDeviceHaveGlyphCapabilities) {
        println("Device has capabilities")
        val frameBuilder: GlyphFrame.Builder? = glyphManager.glyphFrameBuilder
        val frame: GlyphFrame? = if (Common.is20111()) frameBuilder?.buildChannelD()?.build() else frameBuilder?.buildCycles(cycle)?.buildChannelC()?.build()
        glyphManager.setFrameColors()
        frame?.let { f ->
          glyphManager.displayProgress(f, progress, false)
        }
      }
    }

    OnDestroy {
      try {
        glyphManager.closeSession()
      } catch (e: GlyphException) {
        Log.e(TAG, e.message ?: "")
      }
      glyphManager.unInit()
    }

    OnActivityDestroys {
      try {
        glyphManager.closeSession()
      } catch (e: GlyphException) {
        Log.e(TAG, e.message ?: "")
      }
      glyphManager.unInit()
    }

    OnCreate {
      println(glyphManager.hashCode())
    }
  }
}

fun Int.minMax(min: Int, max: Int): Int {
  return maxOf(min, minOf(this, max))
}