<?php
    /** Base exception for webpack-loader. */
    class BaseWebpackLoaderException extends Exception{}

    /** General webpack loader error. */
    class WebpackError extends BaseWebpackLoaderException{}
    
    /** The stats file does not contain valid data. */
    class WebpackLoaderBadStatsError extends BaseWebpackLoaderException{}
    
    /** The bundle took too long to compile. */
    class WebpackLoaderTimeoutError extends BaseWebpackLoaderException{}
    
    /** The bundle name was invalid. */
    class WebpackBundleLookupError extends BaseWebpackLoaderException{}
    